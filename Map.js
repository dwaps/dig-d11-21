import { APIReader } from "./APIReader.js";
import { User} from "./User.js";

let map = null;
let user=null;
// Fonction d'initialisation de la carte
export class Map {
    
    lat = 50.62925;
    lon = 3.057256;
    mapTagId = 'map';
    myMap;
    constructor(){
        this.initMap();
    }
    
    
    /**
     * initialise la vue selon  une latitude et une longitude et 
     * la positionne au niveau de l'élement html dont l'id est mapTagId
     */
    initMap()
    {
        
        this.myMap = L.map(this.mapTagId).setView([this.lat, this.lon], 11);
        
        L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {    
            attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
            minZoom: 1,
            maxZoom: 20
        }).addTo(this.myMap);;
        
       
    };     
   
    /**
     * Ajoute une liste de lieux sur la carte provenant d'une API
     */
   async  addLieux(){
       const lieux=await APIReader.getLieux();
       console.log(lieux);   
       for(let lieu of lieux){
           this.addMarker(await lieu.getCoordinates(),lieu.nom);
        }
        
    };
    /**
     * ajoute un signet sur la carte pour un lieu donné
     * @param {*} coordinates  coordonnées du lieu
     * @param {*} nom nom du lieu
     */
    addMarker(coordinates,nom) {
        if( coordinates != null)        
        L.marker([coordinates.lat, coordinates.long]).bindPopup(nom).addTo(this.myMap).openPopup();
    };
} 
    
window.onload = async function(){
    // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
    map= new Map(); 
    await map.addLieux();
    if(User.isConnected()) writeMessage(User.getPseudo());

};
const connectForm = getConnectForm();
    connectForm.addEventListener('submit', e => {
    e.preventDefault();

    const pseudo = connectForm.nom.value;
    if(pseudo!=null &&pseudo.length>0){
   
    writeMessage(pseudo);
    User.login(new User(pseudo));
    }
    

});

if(location.search.substring(1)=="logOut")
{
       
        getConnectForm().message.value=``;
        User.logOut();

};
/**
 * retourne le formulaire de connection
 * @returns 
 */
function getConnectForm() {
    return document["connect-form"];
}

/**
 * Ecris un message personnalisé dans l'interface 
 * @param {*} pseudo  nom de l'utilisateur
 */
function writeMessage(pseudo) {
    connectForm.message.value = "Bonjour " + pseudo + ", notre prochain atelier web aura lieu au Centre culturel et social de l'Arbrisseau.";
};

