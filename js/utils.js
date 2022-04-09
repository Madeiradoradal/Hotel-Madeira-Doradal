const arrLang = {
    "en": {
        title: "Madeira Hotel",
        home: "Home",
        homeTitle: "Madeira Hotel | Home",
        readMore: "Read more",
        bookNow: "Book now",
        address: "Address",
        direction: "Get direction",
        phone: "Phone",
        email: "Email",
        name: "Name",
        message: "Message",
        reservation: "Reservation",
        newsletter: "Newsletter",
        signUp: "Sign up",
        roomsMessage: "We hope you’ll enjoy your stay",
        largeMap: "View Larger Map",
        aboutUs: "About Us",
        aboutUsDescription: "A fairy tale where your wishes come true",
        ourHistory: "Our History",
        ourTeam: "Our Team",
        testimonials: "Testimonials",
        contactForm: "Contact form",
        enterEmail: "Your email",
        emailAddress: "Email address",
        ourAddress: "Our Address",
        enterSubject: "Subject",
        enterMessage: "Enter your message",
        enterName: "Your name",
        homeAboutUsTitle: "About Us",
        homeRoomsTitle: "Rooms",
        about: "About",
        aboutTitle: "Madeira Hotel | About",
        rooms: "Rooms",
        roomsTitle: "Madeira Hotel | Rooms",
        blog: "Blog",
        blogTitle: "Madeira Hotel | Blog",
        contact: "Contact",
        contactTitle: "Madeira Hotel | Contact",
        welcome: "Welcome to Madeira Hotel"
    },
    "es": {
        title: "Hotel Madeira",
        home: "Inicio",
        homeTitle: "Hotel Madeira | Inicio",
        readMore: "Leer mas",
        bookNow: "Reservar ahora",
        address: "Dirección",
        direction: "Obtener indicaciones",
        phone: "Telefono",
        email: "Correo",
        name: "Nombre",
        message: "Mensaje",
        reservation: "Reservación",
        newsletter: "Boletin informativo",
        signUp: "Registrarse",
        roomsMessage: "Esperamos que disfrute de su estadía",
        largeMap: "Ver mapa más grande",
        aboutUs: "Sobre nosotros",
        aboutUsDescription: "Un cuento de hadas donde tus deseos se hacen realidad",
        ourHistory: "Nuestra historia",
        ourTeam: "Nuestro equipo",
        testimonials: "Testimonios",
        contactForm: "Formulario de contacto",
        enterEmail: "Tu correo",
        emailAddress: "Correo electrónico",
        ourAddress: "Nuestra dirección",
        enterSubject: "Asunto",
        enterMessage: "Ingrese su mensaje",
        enterName: "Tu nombre",
        homeAboutUsTitle: "Sobre nosotros",
        homeRoomsTitle: "Habitaciones",
        about: "Nosotros",
        aboutTitle: "Hotel Madeira | Nosotros",
        rooms: "Habitaciones",
        roomsTitle: "Hotel Madeira | Habitaciones",
        blog: "Blog",
        blogTitle: "Hotel Madeira | Blog",
        contact: "Contactanos",
        contactTitle: "Hotel Madeira | Contactanos",
        welcome: "Bienvenidos al Hotel Madeira",
        
    }
}

$(function() {
    $(".translate").click(function () {
        Translate($(this).attr("id"));
    });
});


Translate = function (lang) {

    localStorage.setItem("lang", lang);
    $(".lang-text").each(function (index, element) {
        $(this).text(arrLang[lang][$(this).attr("key")]);
    });
    $(".lang-placeholder").each(function (index, element) {
        $(this).attr('placeholder', arrLang[lang][$(this).attr("key")]);
    });
}

Language = function (browserLang) {
    let storageLang = localStorage.getItem("lang");
    if(storageLang)
        return storageLang;
    else
        return browserLang;
}