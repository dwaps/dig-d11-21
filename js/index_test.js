// initilaise les groupes de marqeurs
markerClusters = L.markerClusterGroup();
// intégrer un tableau des longitudes et des latitudes
var villes = {
    "Paris": {
        "lat": 48.852969,
        "lon": 2.349903
    },
    "Brest": {
        "lat": 48.383,
        "lon": -4.500
    },
    "Quimper": {
        "lat": 48.000,
        "lon": -4.100
    },
    "Bayonne": {
        "lat": 43.500,
        "lon": -1.467
    }
};
// initilaisation tableau des marqueurs
var markers = [];
// initialisation de la carte sur les coordonnées de paris
var carte = L.map('carte').setView([48.852969, 2.349903], 13);

L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 6,
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(carte);

// possibilité de personnaliser les marqeurs

// TODO : Création du marqeur et attribution d'un popup possibilité de récupérer en JSON
for (ville in villes) {
    var marker = L.marker([villes[ville].lat, villes[ville].lon]) //.addTo(carte);

    marker.bindPopup("<p>" + ville + "</p>")
        // ajoute le marqueur au groupe
    markerClusters.addLayer(marker);

    // ajout du marqueur au tableau
    markers.push(marker);
}

// regroupement des marqueurs dans un groupe leaftlet
var group = new L.featureGroup(markers);

carte.fitBounds(group.getBounds().pad(0.5));
carte.addLayer(markerClusters);