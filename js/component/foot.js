class foot extends HTMLElement {
    constructor() {
        super();
        var hr = document.createElement("hr");
        hr.className = "clearfix w-100 d-md-none";

        var divItems = document.createElement("div");
        divItems.className = "carousel-inner";
        divItems.appendChild(ownerCopyright("https://mdbootstrap.com/education/bootstrap/", "Andres T. Velez", new Date().getFullYear(), true));
        divItems.appendChild(ownerCopyright("https://mdbootstrap.com/education/bootstrap/", "Juan Camilo Betancur M.", new Date().getFullYear()));

        var divCarousel = document.createElement("div");
        divCarousel.id = "carouselExampleSlidesOnly";
        divCarousel.className = "carousel slide";
        divCarousel.setAttribute ("data-ride", "carousel");
        divCarousel.appendChild(divItems);
        divCarousel.appendChild(optionsLang("en", "English"));
        divCarousel.appendChild(optionsLang("es", "Español"));

        var divCopyright = document.createElement("div");
        divCopyright.className = "footer-copyright text-center bg-dark text-light py-3";
        divCopyright.appendChild(divCarousel);

        var divIcons = document.createElement("div");
        divIcons.className = "icons d-flex justify-content-between mx-5 mx-md-0";
        divIcons.appendChild(socialMedia("fab fa-instagram", "http://www.instagram.com"));
        divIcons.appendChild(socialMedia("fab fa-facebook-square", "http://www.facebook.com"));
        divIcons.appendChild(socialMedia("fab fa-twitter-square", "http://www.twitter.com"));
        divIcons.appendChild(socialMedia("fab fa-youtube-square", "http://www.youtube.com"));

        var form = document.createElement("form");
        form.className = "justify-content-center mx-5 mx-md-0";
        form.appendChild(newsletterInput());
        form.appendChild(newsletterButton());

        var hNewsletter = document.createElement("h3");
        hNewsletter.className = "font-weight-bold text-uppercase mt-3 mb-4 lang-text";
        hNewsletter.setAttribute("key", "newsletter");
        hNewsletter.append("Boletin informativo");

        var divNewsletter =  document.createElement("div");
        divNewsletter.className = "col-md-4 mx-auto";
        divNewsletter.appendChild(hNewsletter);
        divNewsletter.appendChild(form);
        divNewsletter.appendChild(divIcons);

        var hBook = document.createElement("h3");
        hBook.className = "font-weight-bold text-uppercase mt-3 mb-4 lang-text";
        hBook.setAttribute("key", "reservation");
        hBook.append("Reservación");

        var divBook =  document.createElement("div");
        divBook.className = "col-md-4 mx-auto";
        divBook.appendChild(hBook);
        divBook.appendChild(bookDiv(this.getAttribute('phoneNumber'), this.getAttribute('e-mail')));

        var hDirection = document.createElement("h3");
        hDirection.className = "font-weight-bold text-uppercase lang-text mt-3 mb-4";
        hDirection.setAttribute("key", "address");
        hDirection.append("Dirección");

        var divDirection =  document.createElement("div");
        divDirection.className = "col-md-4 mx-auto";
        divDirection.appendChild(hDirection);
        divDirection.appendChild(directionDiv(this.getAttribute('address'), this.getAttribute('location')));

        var divRow =  document.createElement("div");
        divRow.className = "row";
        divRow.appendChild(divDirection);
        divRow.appendChild(hr);
        divRow.appendChild(divBook);
        divRow.appendChild(hr);
        divRow.appendChild(divNewsletter);

        var divContainer =  document.createElement("div");
        divContainer.className = "container py-5";
        divContainer.appendChild(divRow);

        var footer =  document.createElement("footer");
        footer.className = "page-footer font-small text-center text-md-left";
        footer.appendChild(whatsappIcon(this.getAttribute('whatsappNumber')));
        footer.appendChild(divContainer);
        footer.appendChild(divCopyright);

        this.appendChild(footer);
    }
  }
function whatsappIcon(number) {
    var i = document.createElement("i");
    i.className = "fa fa-whatsapp my-float";
    var a = document.createElement("a");
    a.setAttribute ("href", `https://api.whatsapp.com/send?phone=${number}&text=Hola Quisiera% informaci% sobre Varela .`);
    a.className = "float";
    a.setAttribute ("target", "_blank");
    a.appendChild(i);
    return a;
}

function directionDiv(address, location) {
    var small = document.createElement("small");
    small.className = "lang-text";
    small.setAttribute("key", "direction");
    small.append("Obtener indicaciones");

    var a = document.createElement("a");
    a.setAttribute("href", "contact.html");
    a.appendChild(small);

    var div = document.createElement("div");
    div.appendChild(directionText(address));
    div.appendChild(directionText(location));
    div.appendChild(a);
    return div;
}

function directionText(text) {
    var p = document.createElement("p");
    p.append(text);
    return p;
}

function bookDiv(number, mail) {
    var div =  document.createElement("div");
    div.appendChild(phoneLabel(number));
    div.appendChild(mailLabel(mail));
    // Boton para abrir modal de reserva
    //div.appendChild(bookButton("servicesmodal"));
    return div;
}

function mailLabel(email) {
    var a = document.createElement("a");
    a.setAttribute ("href", `mailto:${email}`);
    a.append(email);
    var label = document.createElement("label");
    label.className = "lang-text";
    label.setAttribute ("key", "email");
    label.append("Correo");
    var p = document.createElement("p");
    p.appendChild(label);
    p.append(": ");
    p.appendChild(a);
    return p;
}

function phoneLabel(number) {
    var a = document.createElement("a");
    a.setAttribute ("href", `tel::${number}`);
    a.append(number);
    var label = document.createElement("label");
    label.className = "lang-text";
    label.setAttribute ("key", "phone");
    label.append("Telefono");
    var p = document.createElement("p");
    p.appendChild(label);
    p.append(": ");
    p.appendChild(a);
    return p;
}

function bookButton(target) {
    var button = document.createElement("button");
    button.setAttribute("type", "button");
    button.className = "bn30 mb-5 pb-2 lang-text text-uppercase";
    button.setAttribute("data-toggle", "modal");
    button.setAttribute("data-target", `#${target}`);
    button.setAttribute("key", "bookNow");
    button.append("Reservar ahora");

    var div = document.createElement("div");
    div.appendChild(button);
    return div;
}

function newsletterInput() {
    var label = document.createElement("label");
    label.className = "form-control-label sr-only lang-text";
    label.setAttribute("for", "email");
    label.setAttribute("key", "emailAddress");
    label.append("Correo electrónico");

    var input = document.createElement("input");
    input.className = "form-control lang-placeholder";
    input.setAttribute("type", "email");
    input.id = "email";
    input.setAttribute("key", "enterEmail");
    input.setAttribute("aria-describedby", "email");
    input.setAttribute("placeholder", "Tu correo");

    var div = document.createElement("div");
    div.className = "form-group";
    div.appendChild(label);
    div.appendChild(input);
    return div;
}

function newsletterButton() {
    var button = document.createElement("button");
    button.className = "btn btn-sm btn-outline-white my-0 lang-text bn30 mb-5";
    button.setAttribute("key", "signUp");
    button.setAttribute("type", "button");
    button.append("Registrarse");

    var div = document.createElement("div");
    div.className = "input-group-append";
    div.appendChild(button);
    return div;
}

function socialMedia(icon, href) {
    var i = document.createElement("i");
    i.className = icon;

    var a = document.createElement("a");
    a.setAttribute ("href", href);
    a.appendChild(i);
    return a;
}

function ownerCopyright(href, name, year, first) {
    var a = document.createElement("a");
    a.setAttribute ("href", href);
    a.className = "text-light";
    a.append(`© ${year} ${name}`);

    var div = document.createElement("div");
    div.className = "carousel-item";
    if(first)  {
        div.classList.add("active");
    }
    div.appendChild(a);
    return div;
}

function optionsLang(id, value) {
    var button = document.createElement("button");
    button.className = "translate bn30";
    button.id = id;
    button.append(value);
    return button;
}
  customElements.define('component-foot', foot);