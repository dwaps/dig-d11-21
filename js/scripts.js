console.log('scripts.js')

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
//MAP
var mymap = L.map('map').setView([48.954660571837415, 2.3393538558418947], 16)

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'sk.eyJ1IjoiZG9yaWFuZXIiLCJhIjoiY2t2Y2phamN6MHpwdzJvcGc0Y203d2g0YSJ9.0Ko2pUBwST2umvRDmb-VKQ'
}).addTo(mymap);

//POINTEUR
var pointIcon = L.icon({
    iconUrl: 'assets/img/point.png',
   

    iconSize:     [40, 50], // size of the icon
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([48.954660571837415, 2.3393538558418947], {icon: pointIcon}).addTo(mymap);

//2 Sur le TP SPA
//Si vous choisissez ce devoir, vous devrez ajouter des fonctionnalités au devoir à rendre le 30 octobre (module HTML CSS Bootstrap). Bien sûr, le devoir à rendre le 30 est bien uniquement le code HTML CSS Bootstrap. Les fonctionnalités à ajouter en JS sont une itération du devoir et la date butoir est bien une semaine plus tard.
//Il faudra:
// - Afficher des marqueurs sur la carte de dernière section. Vous utiliserez pour cela l'open data de la ville de votre choix ainsi que le jeu de données de votre choix.
// - Simuler une connexion utilisateur via le formulaire se trouvant à côté de la carte (pas besoin de le faire aussi complexe que ce qu'on a fait ensemble: il suffira de stocker l'utilisateur dans le sessionStorage tel quel). Si l'utilisateur est connecté, vous afficherez un message personnalisé.