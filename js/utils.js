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
        reservation: "Reservation",
        newsletter: "Newsletter",
        signUp: "Sign up",
        emailAddress: "Email address",
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
        reservation: "Reservación",
        newsletter: "Boletin informativo",
        signUp: "Registrarse",
        emailAddress: "Correo electrónico",
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
    $(".lang").each(function (index, element) {
        $(this).text(arrLang[lang][$(this).attr("key")]);
    });
}