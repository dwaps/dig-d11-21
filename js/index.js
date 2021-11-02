
/* Gestion du menu Burger / page responsive */
const listElements = document.querySelectorAll('.nav-link');
for (let i = 0; i < listElements.length; i++) {
    listElements[i].addEventListener( 'click', function(){
        document.querySelector('.navbar-toggler').classList.add('collapsed');
        document.querySelector('.navbar-collapse').classList.remove('show');        
    });
}


/* Gestion du menu qui réduit de hauteur sur le scroll */
window.onscroll = function() {
    const classListSearched = '.navbar-brand,section h2';
    const classScrolled = 'scrolled';
 
    if(document.documentElement.scrollTop > 100
    && !document.querySelector(classListSearched).classList.contains(classScrolled)){
        const listElements = document.querySelectorAll(classListSearched);
        for (let i = 0; i < listElements.length; i++) {
            listElements[i].classList.add(classScrolled);
        }
    }
    else if(document.documentElement.scrollTop < 5
         && document.querySelector(classListSearched).classList.contains(classScrolled)){
        const listElements = document.querySelectorAll(classListSearched);
        for (let i = 0; i < listElements.length; i++) {
            listElements[i].classList.remove(classScrolled);
        }
    }
};




/* Initialisation de la carte en vue France */
const parmFranceLat = 47.2, parmFranceLon = 1.7, parmFranceZoom = 6;
let maCarte = L.map('maCarte').setView([parmFranceLat, parmFranceLon], parmFranceZoom);
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    minZoom: 1,
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
  }).addTo(maCarte);


/* Paramétrage de l'icone des markers */
const myIcon = L.icon({
    iconUrl: 'img/markerRoyalEnfield.png',
    iconSize: [20, 36],
    iconAnchor: [10, 36],
    popupAnchor: [0, -36]
});


/* Chargement des régions et des garages du fichier JSON */
import { Region } from "./classRegion.js";
import { Garage } from "./classGarage.js";

const regions = await Region.findAll();
const garages = await Garage.findAll();

// A partir de la liste des garages, on constitue la liste unique des régions (qui ont au moins un garage) et on les trie sur les noms de régions
let listRegions = Array.from(new Set(garages.map(g => g.pos.reg)))
    .map(id => {return regions.filter(region => region.id === id);})
        .sort((a,b) => (a[0].nom > b[0].nom ? 1 : -1));

// Génération de la liste des régions avec l'id et les coordonnées GPS de la région
let selectR = document.querySelector('.selectRegion');        
selectR.innerHTML = `<select class="form-control formObj" id="carteRegion">
                            <option value="">Votre région...</option>
                            <option value="all">Toute la France !</option>
                            ${listRegions.map(([{id,nom}]) => (`
                            <option value="${id}">${nom}</option>
                            `))}
                          </select>`;

document.getElementById("carteRegion").onchange = eventChangeRegion;

function eventChangeRegion(){

    removeAllMarkers();

    if(this.value === "all"){ listRegions.forEach(region => setRegionMarker(region[0].id));}
    
    else if(this.value != ""){ setRegionMarker(this.value);}

    setMapView(this.value != "all" && this.value != "" ? this.value : undefined);
}

function removeAllMarkers(){
    // On retire tous les marqueurs de la carte (mais on garde le tableau des marqueurs générés la 1ère fois)
    listRegions.filter(region => region[0].markers != undefined)
               .forEach(region => { region[0].markers.forEach(marker => maCarte.removeLayer(marker)) });
}


function setRegionMarker(idRegion){
    let region = listRegions.find(region => region[0].id === idRegion)[0];
    if(region.markers === undefined){
        region.markers = new Array;
        garages.filter(garage => garage.pos.reg === region.id)
               .forEach(garage => {
                    const marker = L.marker([garage.pos.gps.lat, garage.pos.gps.lon], {icon: myIcon});
                    marker.bindPopup(`<div class="markerPopup">
                                        <p class="nom">${garage.nom}</p>
                                        <p class="adress"><i class="fas fa-map-marker-alt"></i> ${garage.pos.adr}</p>
                                        <p class="email"><i class="fas fa-envelope-open-text"></i> <a href="mailto:${garage.contact.mail}" title="Pour nous contacter...">${garage.contact.mail}</a></p>
                                        <p class="tel"><i class="fas fa-phone-square-alt"></i> <a href="tel:${garage.contact.tel}" title="Pour nous appeler...">${garage.contact.tel}</a></p>
                                      </div>`);
                    marker.bindTooltip(garage.nom);
                    region.markers.push(marker);
                });
    }
    L.layerGroup(region.markers).addTo(maCarte);
}


function setMapView(idRegion){
    if(idRegion === undefined){
        maCarte.setView([parmFranceLat, parmFranceLon], parmFranceZoom);
    }
    else{
        let region = listRegions.find(region => region[0].id === idRegion)[0];
        maCarte.setView([region.gps.lat, region.gps.lon], region.zoom);
    }
}

// TODO :
// 1. Group de markers (cf. discord de Christian)
// 2. Connection
// 3. Revue de code + commentaires + optimisation / factorisation
