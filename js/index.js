import { App } from './app.js';
import { Router } from './router.js';
import { Bornes } from './bornes.js';
import { Centre } from './centres.js';

new App();
Router.run();

window.onscroll = function() {
    if (window.scrollY > 60) body.classList.add('scrolled');
    else body.classList.remove('scrolled');
}

//Génération de la carte
 
// Initialisation de la latitude et de la longitude
const lat = 48.852969;
const lon = 2.349903;

// initialisation de la carte sur les coordonnées de paris
let carte = L.map('carte').setView([lat, lon], 45);
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    minZoom: 6,
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
}).addTo(carte);

// Personnalisation des marqueurs des bornes
const myBorneIcon = L.icon({
    iconUrl: './asset/icons/electric-point.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
});

// Personnalisation des marqueurs des centres
const myCentreIcon = L.icon({
    iconUrl: './asset/icons/placeholder.png',
    iconSize: [40, 40],
    iconAnchor: [25, 50],
    popupAnchor: [-5, -50]
});

const {centres} = await Centre.findAll();
const bornes = await Bornes.findAll();

// implémentation des centres sur la carte
centres.forEach(centre => {
            const centreMarker = L.marker([centre.gps.lat, centre.gps.lon], { icon: myCentreIcon }).addTo(carte);
            centreMarker.bindPopup(`<p class="id">${centre.nom}</p>
        <p class="adresse"><i class="fas fa-map-marker-alt"></i> ${centre.adresse}</p>
        <p class="ouverture"><i class="fas fa-calendar-check"></i> ${centre.open.jour}</p>
        <p class="ouverture"><i class="far fa-clock"></i> ${centre.open.horaires}</p>`);
        centreMarker.bindTooltip(centre.nom);
        });

// initilisation tableau des marqueurs
let markers = [];

// initialisation et personnalisation des groupes de marqeurs
let markerClusters = L.markerClusterGroup({
	iconCreateFunction: function(cluster) {
		return L.divIcon({ html: '<div class="mycluster"><b>' + cluster.getChildCount() + '</b></div>'});
	},
    polygonOptions : {
        weight: 0.5,
        color: 'darkgreen',
    }
});

// Implémentataion des bornes sur la carte
bornes.forEach(borne => {
    const marker = L.marker([borne.fields.geo_point_2d[0], borne.fields.geo_point_2d[1]], { icon: myBorneIcon });
    marker.bindPopup(`<p class="id"><i class="fas fa-charging-station"></i> ${borne.fields.id_pdc}</p>
                    <p class="adresse"><i class="fas fa-map-marker-alt"></i> ${borne.fields.ad_station}</p>
                    <p class="statut"><i class="fas fa-info-circle"></i> ${borne.fields.statut_pdc}</p>`);
    marker.bindTooltip(borne.fields.statut_pdc);
    markerClusters.addLayer(marker);
    markers.push(markerClusters);
});

// Regroupement des marqueurs dans un groupe leaftlet
const group = new L.featureGroup(markers);

carte.fitBounds(group.getBounds().pad(0.5));
carte.addLayer(markerClusters);