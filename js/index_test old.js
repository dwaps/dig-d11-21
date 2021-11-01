// Initialisation de la latitude et de la longitude
const lat = 48.852969;
const lon = 2.349903;

initMap();

function initMap(){   
    // initilaisation tableau des marqueurs
    var markers = [];
    
    // initilaise les groupes de marqeurs
    markerClusters = L.markerClusterGroup();
    
    // **** A SUPRIMER ****
    // intégrer un tableau des longitudes et des latitudes
    // var villes = {
        //     "Paris": {
            //         "lat": 48.852969,
            //         "lon": 2.349903
            //     },
            //     "Brest": {
                //         "lat": 48.383,
                //         "lon": -4.500
                //     },
                //     "Quimper": {
                    //         "lat": 48.000,
                    //         "lon": -4.100
                    //     },
                    //     "Bayonne": {
                        //         "lat": 43.500,
                        //         "lon": -1.467
                        //     }
                        // };
                        // **** FIN SUPPRESSION ****
                        
                        
                        
                        // initialisation de la carte sur les coordonnées de paris
                        var carte = L.map('carte').setView([48.852969, 2.349903], 13);
                        
                        L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                            minZoom: 6,
                            maxZoom: 18,
                            tileSize: 512,
                            zoomOffset: -1,
                            // accessToken: 'your.mapbox.access.token'
                        }).addTo(carte);
                        
                        // ***** PERSONNALISATION DES MARQUEURS ******
                        // var carIcon = L.icon({
                            //     iconUrl: './asset/icons/charging_station.png',
                            //     iconSize: [38, 34],
                            //     // iconAnchor: [22, 94],
                            //     popupAnchor: [-3, -76]
                            // });
                            // END
                            
                            // L.marker([48.80141982352569, 2.1306942584880364], { icon: carIcon }).addTo(carte);
                            // L.marker([48.80141982352569, 2.1306942584880364]).addTo(carte);
                            
                            // ****** INTEGRATION FICHIER GEOJSON A/P DATABASE ******
                            
                            function onEachFeature(feature, bornes) {
                                if (feature.properties && bornes.feature.properties.ad_station) {
                                    bornes.bindPopup("<p>Point de charge</p>"+"<p>" + bornes.feature.properties.ad_station + "</p>"+"<p>"+bornes.feature.properties.statut_pdc + "</p>");
                                }
                            }
                            
                            var bornes_lyr = L.geoJSON(bornes)//.addTo(carte);
                            
                            var bornes_lyr = L.geoJSON(bornes, {
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
                                
                                // TODO : Création du marqeur et attribution d'un popup possibilité de récupérer en JSON
                                // for (ville in villes) {
                                    //     var marker = L.marker([villes[ville].lat, villes[ville].lon]) //.addTo(carte);
                                    
                                    //     marker.bindPopup("<p>" + ville + "</p>")
                                    //         // ajoute le marqueur au groupe
                                    //     markerClusters.addLayer(marker);
                                    
                                    //     // ajout du marqueur au tableau
                                    //     markers.push(marker);
                                    // };
                                    
                                    carte.fitBounds(group.getBounds().pad(0.5));
                                    carte.addLayer(markerClusters);
                                    
                                }