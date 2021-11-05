import { Region } from "./Region.js";
import { Garage } from "./Garage.js";

export class Map{
/* STATIC */
/* STATIC.Private */

    //=> Paramétrage de l'icone du repère par défaut
    static #getIconMarker(){
        return L.icon({
            iconUrl: 'img/markerRoyalEnfield.png',
            iconSize: [20, 36],
            iconAnchor: [10, 36],
            popupAnchor: [0, -36]
        });
    }


/* STATIC.Public */

    // Constantes pour initialiser la carte sur la France
    static PARM_INIT_LAT = 47.2;
    static PARM_INIT_LON = 1.7;
    static PARM_INIT_ZOOM = 5;


/* CONSTRUCTEUR */

    constructor(){
        // Variables privées de l'instance Map
        this.#maCarte;  
        this.#listRegions;
        this.#regions;
        this.#garages;

        // Initialiser la carte en vue France
        this.#createMap();

        // Générer la liste des régions avec l'id et les coordonnées GPS de la région
        this.#createListe();
    }


/* NON STATIC */
/* NON STATIC.Private */

    // Variables privées de l'instance Map : instanciées dans le constructeur, mais doivent être déclarées aussi au niveau de la classe !
    #maCarte;
    #listRegions;
    #regions;
    #garages;


    //=> Initialiser la carte en vue France
    #createMap(){
        this.#maCarte = L.map('maCarte').setView([Map.PARM_INIT_LAT, Map.PARM_INIT_LON], Map.PARM_INIT_ZOOM);
        L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
            minZoom: 1,
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'your.mapbox.access.token'
        }).addTo(this.#maCarte);
    }


    //=> Générer la liste des régions avec l'id et les coordonnées GPS de la région
    async #createListe(){
        // Chargement des régions et des garages du fichier JSON
        this.#regions = await Region.findAll();
        this.#garages = await Garage.findAll();

        // A partir de la liste des garages, on constitue la liste unique des régions (qui ont au moins un garage) et on les trie sur les noms de régions
        this.#listRegions = Array.from(new Set(this.#garages.map(g => g.pos.reg)))
            .map(id => {return this.#regions.filter(region => region.id === id);})
                .sort((a,b) => (a[0].nom > b[0].nom ? 1 : -1));

        // Génération de la liste des régions avec l'id et les coordonnées GPS de la région
        let selectR = document.querySelector('.selectRegion');        
        selectR.innerHTML = `<select class="form-control formObj" id="carteRegion">
                                    <option value="">Votre région...</option>
                                    <option value="all">Toute la France !</option>
                                    ${this.#listRegions.map(([{id,nom}]) => (`
                                    <option value="${id}">${nom}</option>
                                    `))}
                            </select>`;

        // Création d'un alias à this de l'instance de Map car le this dans l'Event handling correspond à l'élément HTML !
        const that = this;                         

        // A chaque changement de sélection de la liste, on met à jour la carte...
        document.getElementById("carteRegion").addEventListener( 'change', function(){
            // Retirer tous les répères présent sur la carte
            that.#removeAllMarkers();
        
            // Si l'utilisateur a sélectionné "Toute la France" Alors on affiche tous les repères de toutes les régions
            if(this.value === "all"){ that.#listRegions.forEach(region => that.#setRegionMarker(region[0].id)); }
            
            // Sinon si l'utilisateur a bien sélectionné une région Alors on affiche tous les repères de la région sélectionnée
            else if(this.value != ""){ that.#setRegionMarker(this.value); }
        
            // Afficher la carte au centre de la région ou de la France, avec les coordonnées GPS et le zoom adéquats
            that.#setMapView(this.value != "all" && this.value != "" ? this.value : undefined);
        });
    }


    //=> Retirer tous les répères présent sur la carte
    #removeAllMarkers(){
        this.#listRegions.filter(region => region[0].markers != undefined)
                         .forEach(region => {
                             region[0].markers.forEach(marker => this.#maCarte.removeLayer(marker));
                          });
    }
    

    //=> Ajouter les repères sur la carte sur la région passée en paramètre
    #setRegionMarker(idRegion){
        // On récupère les repères de la région au niveau du tableau des régions de l'instance
        let region = this.#listRegions.find(region => region[0].id === idRegion)[0];

        // Si les repères n'ont pas encore été définis Alors on génère la liste des repères de la région
        if(region.markers === undefined){
            let markerClusters = L.markerClusterGroup({zoomToBoundsOnClick: true});
            region.markers = new Array;
            // Pour chaque garage de la région, on créé le repère correspondant
            this.#garages.filter(garage => garage.pos.reg === region.id)
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
                        region.markers.push(markerClusters); // On incrémente la liste des repères de la région
                    });
        }
        // On ajoute les repères à la carte (récupérés par un appel précédent ou générés)
        L.layerGroup(region.markers).addTo(this.#maCarte);
    }


    //=> Afficher la carte au centre de la région ou de la France, avec les coordonnées GPS et le zoom adéquats
    #setMapView(idRegion){
        if(idRegion === undefined){
            this.#maCarte.setView([Map.PARM_INIT_LAT, Map.PARM_INIT_LON], Map.PARM_INIT_ZOOM);
        }
        else{
            let region = this.#listRegions.find(region => region[0].id === idRegion)[0];
            this.#maCarte.setView([region.gps.lat, region.gps.lon], region.zoom);
        }
    }
/* NON STATIC.Public */
}
