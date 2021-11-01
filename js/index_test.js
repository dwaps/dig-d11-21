// Initialisation de la latitude et de la longitude
const lat = 48.852969;
const lon = 2.349903;

initMap();

function initMap() {
    // initilaisation tableau des marqueurs
    var markers = [];

    // Personnalisation des marqueurs
    var myIcon = L.icon({
        iconUrl: './asset/icons/electric-point.png',
        iconSize: [50, 50],
        iconAnchor: [25,50],
        popupAnchor: [-1, -25]
    });


    // initialisation de la carte sur les coordonnées de paris
    var carte = L.map('carte').setView([lat, lon], 13);
    // initialisaition les groupes de marqeurs
    markerClusters = L.markerClusterGroup();

    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        minZoom: 6,
        maxZoom: 18,
        tileSize: 512,
        zoomOffset: -1,
    }).addTo(carte);

    // ****** INTEGRATION FICHIER GEOJSON A/P DATABASE ******

    function onEachFeature(feature, bornes) {
        if (feature.properties && bornes.feature.properties.ad_station) {
            var popupContent = "<p>Point de charge</p>" + "<p>Adresse: " + bornes.feature.properties.ad_station + "</p>" + "<p>Status: " + bornes.feature.properties.statut_pdc + "</p>"
            bornes.bindPopup(popupContent);
        }
    }

    var bornes_lyr = L.geoJSON(bornes, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, { icon: myIcon });
        },
        onEachFeature: onEachFeature
    });

    // Regroupement des marqueurs dans un groupe leaftlet
    markerClusters.addLayer(bornes_lyr);
    markers.push(bornes_lyr);
    var group = new L.featureGroup(markers);

    // **** END OF INTEGRATION FICHIER GEOJSON A/P DATABASE ******

    // Test avec fetch NON OPERATIONNEL
    // const url = "https://opendata.paris.fr/api/records/1.0/search/?dataset=belib-points-de-recharge-pour-vehicules-electriques-disponibilite-temps-reel&q=&facet=statut_pdc&facet=postal_code&facet=last_updated&refine.postal_code=75010" 

    // const url = "../database/recharge-vehicules.json";

    //  async function getDatas(){

    //      const datas = await fetch(url).then(res => res.json());
    //      console.log(datas);
    //      return datas;
    //     }
    // getDatas();

    // var bornesFetch_lyr = L.geoJSON(data).addTo(carte);

    carte.fitBounds(group.getBounds().pad(0.5));
    carte.addLayer(markerClusters);

}