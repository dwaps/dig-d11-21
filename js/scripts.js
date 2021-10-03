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
var mymap = L.map('map').setView([48.846633160486476, 2.348053385810721], 12)

L.tileLayer('https://api.mapbox.com/styles/v1/dorianer/ckvo2iu44oqoa14o8mibhcoi9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZG9yaWFuZXIiLCJhIjoiY2t2Y2lrODc2M3N6OTJybHBiOHdmdDR3YSJ9.RGimQi-HY7FlmNHKdHQaPg', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'sk.eyJ1IjoiZG9yaWFuZXIiLCJhIjoiY2t2Y2phamN6MHpwdzJvcGc0Y203d2g0YSJ9.0Ko2pUBwST2umvRDmb-VKQ'
}).addTo(mymap);


//SESSION STORAGE


  function store(){

    var pseudo = document.getElementById("pseudo");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    sessionStorage.setItem("users",  pseudo.value + " "+ email.value +" "+ password.value );
if (pseudo.value, email.value, password.value !== null){
    alert("Bonjour " + pseudo.value + " et bienvenue.")
}
  }