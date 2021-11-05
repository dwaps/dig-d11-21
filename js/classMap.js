import { Region } from "./classRegion.js";
import { Garage } from "./classGarage.js";

export class Map{

    static parmFranceLat = 47.2;
    static parmFranceLon = 1.7;
    static parmFranceZoom = 5;

    static #maCarte;
    static #listRegions;
    static #regions;
    static #garages;

    static create(){
        // Initialisation de la carte en vue France
        Map.#createMap();

        // Génération de la liste des régions avec l'id et les coordonnées GPS de la région
        Map.#createListe();
    }

    // Initialisation de la carte en vue France
    static #createMap(){
        Map.#maCarte = L.map('maCarte').setView([Map.parmFranceLat, Map.parmFranceLon], Map.parmFranceZoom);
        L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
            minZoom: 1,
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'your.mapbox.access.token'
        }).addTo(Map.#maCarte);
    }

    // Génération de la liste des régions avec l'id et les coordonnées GPS de la région
    static async #createListe(){
        /* Chargement des régions et des garages du fichier JSON */
        Map.#regions = await Region.findAll();
        Map.#garages = await Garage.findAll();

        // A partir de la liste des garages, on constitue la liste unique des régions (qui ont au moins un garage) et on les trie sur les noms de régions
        Map.#listRegions = Array.from(new Set(Map.#garages.map(g => g.pos.reg)))
            .map(id => {return Map.#regions.filter(region => region.id === id);})
                .sort((a,b) => (a[0].nom > b[0].nom ? 1 : -1));

        // Génération de la liste des régions avec l'id et les coordonnées GPS de la région
        let selectR = document.querySelector('.selectRegion');        
        selectR.innerHTML = `<select class="form-control formObj" id="carteRegion">
                                    <option value="">Votre région...</option>
                                    <option value="all">Toute la France !</option>
                                    ${Map.#listRegions.map(([{id,nom}]) => (`
                                    <option value="${id}">${nom}</option>
                                    `))}
                             </select>`;
        // A chaque changement de sélection de la liste, on met à jour la carte
        document.getElementById("carteRegion").addEventListener( 'change', function(){
            Map.#removeAllMarkers();
        
            if(this.value === "all"){ Map.#listRegions.forEach(region => Map.#setRegionMarker(region[0].id));}
            
            else if(this.value != ""){ Map.#setRegionMarker(this.value);}
        
            Map.#setMapView(this.value != "all" && this.value != "" ? this.value : undefined);
        });
    }

    static #removeAllMarkers(){
        // On retire tous les marqueurs de la carte (mais on garde le tableau des marqueurs générés la 1ère fois)
        Map.#listRegions.filter(region => region[0].markers != undefined)
                .forEach(region => { region[0].markers.forEach(marker => Map.#maCarte.removeLayer(marker)) });
    }

    /* Paramétrage de l'icone des markers */
    static #getIconMarker(){
        return L.icon({
            iconUrl: 'img/markerRoyalEnfield.png',
            iconSize: [20, 36],
            iconAnchor: [10, 36],
            popupAnchor: [0, -36]
        });
    }

    static #setRegionMarker(idRegion){
        let region = Map.#listRegions.find(region => region[0].id === idRegion)[0];
        if(region.markers === undefined){
            let markerClusters = L.markerClusterGroup({zoomToBoundsOnClick: true});
            region.markers = new Array;
            Map.#garages.filter(garage => garage.pos.reg === region.id)
                   .forEach(garage => {
                        const marker = L.marker([garage.pos.gps.lat, garage.pos.gps.lon], {icon: Map.#getIconMarker()});
                        marker.bindPopup(`<div class="markerPopup">
                                            <p class="nom">${garage.nom}</p>
                                            <p class="adress"><i class="fas fa-map-marker-alt"></i> ${garage.pos.adr}</p>
                                            <p class="email"><i class="fas fa-envelope-open-text"></i> <a href="mailto:${garage.contact.mail}" title="Pour nous contacter...">${garage.contact.mail}</a></p>
                                            <p class="tel"><i class="fas fa-phone-square-alt"></i> <a href="tel:${garage.contact.tel}" title="Pour nous appeler...">${garage.contact.tel}</a></p>
                                          </div>`);
                        marker.bindTooltip(garage.nom);
                        markerClusters.addLayer(marker);
                        region.markers.push(markerClusters);
                    });
        }
        L.layerGroup(region.markers).addTo(Map.#maCarte);
    }
    
    static #setMapView(idRegion){
        if(idRegion === undefined){
            Map.#maCarte.setView([Map.parmFranceLat, Map.parmFranceLon], Map.parmFranceZoom);
        }
        else{
            let region = Map.#listRegions.find(region => region[0].id === idRegion)[0];
            Map.#maCarte.setView([region.gps.lat, region.gps.lon], region.zoom);
        }
    }
}