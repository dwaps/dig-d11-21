import { APIReader } from "./APIReader.js";
import {Map} from "./Map.js";


// Ojectifs-TP javascript
// lire les données d'une API
// afficher les données sous forme de signets sur une carte open street map
// simuler une connection simple avec sauvegarde et lecture dans le localStorage.
// affichier message personnalisé à l'utilisateur


//Données de connection  au service web
// https://adresse.data.gouv.fr/api-doc/adresse

// Ville de Lille
// jeux de données : lieux donnant access au numerique
// https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=lieux-dacces-au-numerique-portail-solidarites-ccas-lille&q=&facet=acteur

// renvoie un object jason contenant la liste des lieux offrant des prestations d'acces aux numeriques sur Lille

// utilisation de nominatim afin de traduite les adresses en coordonnées GPS

// utilisation de leafLet librairie javascript de gestion de carte afin d'affichier les signets

// connexion et affichage d'un message personnalisé comprenant le pseudo fourni par l'utilisateur.


console.log("Hello !");
async function test (){
  //  let datas=await APIReader.getDatasFromAPI();
//let lieux=await APIReader.getLieux();
 //  console.log(lieux);
  //  console.log(lieux[0].getAdressParameters());
  
   console.log(await lieux[0].getCoordinates());
}


// class App{

//   map;

//     init(){
//       this.map= new Map();
//       window.onload = async function(){
//         // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
//          initMap(); 
//     };
//     }    
// }
// // test();


 





