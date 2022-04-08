class head extends HTMLElement {
    constructor() {
        super();
        var divNavbar = document.createElement("div");
        divNavbar.className = "navbar-nav ml-auto pt-1";
        divNavbar.appendChild(optionsMenu("nav-item nav-link lang", "index.html", "Inicio", "home", this.getAttribute('home')));
        divNavbar.appendChild(optionsMenu("nav-item nav-link lang", "about.html", "Nosotros", "about", this.getAttribute('about')));
        divNavbar.appendChild(optionsMenu("nav-item nav-link lang", "rooms.html", "Habitaciones", "rooms", this.getAttribute('rooms')));
        divNavbar.appendChild(optionsMenu("nav-item nav-link lang", "blog.html", "Blog", "blog", this.getAttribute('blog')));
        divNavbar.appendChild(optionsMenu("nav-item nav-link lang", "contact.html", "Contactanos", "contact", this.getAttribute('contact')));
        divNavbar.appendChild(bookButton("servicesmodal"));
        var divCollapse = document.createElement("div");
        divCollapse.className = "collapse navbar-collapse";
        divCollapse.id = "myTogglerNav";
        divCollapse.appendChild(divNavbar);

        var a = document.createElement("a");
        a.setAttribute ("href", "index.html");
        a.className = "navbar-brand lang";
        a.setAttribute ("key", "title");
        a.append("Hotel Madeira");

        var divContainer = document.createElement("div");
        divContainer.className = "container";
        divContainer.appendChild(a);
        divContainer.appendChild(collapseButton(divCollapse.id));
        divContainer.appendChild(divCollapse);

        var nav = document.createElement("nav");
        nav.className = "navbar bg-dark navbar-dark navbar-expand-md fixed-top";
        nav.appendChild(divContainer);

        this.appendChild(nav);
    }
    
  }
function collapseButton(target) {
    var span = document.createElement("span");
    span.className = "navbar-toggler-icon";
    var button = document.createElement("button");
    button.className = "navbar-toggler";
    button.setAttribute ("type", "button");
    button.setAttribute ("data-toggle", "collapse");
    button.setAttribute ("data-target",`#${target}`);
    button.setAttribute ("aria-controls",`${target}`);
    button.setAttribute ("aria-expanded","false");
    button.setAttribute ("aria-label","Toggle navigation");
    button.appendChild(span);
    return button;
}

function bookButton(target) {
    var button = document.createElement("button");
    button.setAttribute("type", "button");
    button.className = "btn btn-primary pb-2 text-uppercase";
    button.setAttribute("data-toggle", "modal");
    button.setAttribute("data-target", `#${target}`);
    button.setAttribute("key", "bookNow");
    button.append("Reservar ahora");

    var div = document.createElement("div");
    div.className = "mb-1";
    div.appendChild(button);
    return div;
}

function optionsMenu(classes, href, text, key, active) {
    var a = document.createElement("a");
    a.setAttribute ("href", href);
    a.className = classes;
    a.classList.add(active);
    a.setAttribute ("key", key);
    a.append(text);
    return a;
}
  customElements.define('component-head', head);