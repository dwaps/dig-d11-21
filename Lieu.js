export class Lieu {
  nom;
  adresse;
  coordinates=null ;
  static nominatimUrl= 'https://nominatim.openstreetmap.org/search';

  constructor(nom, adresse) {
    this.nom = nom;
    this.adresse = adresse;
    
    
  };
  /** construit une url permettant d'interroger le service nominatim afin de trouver les coordonnées gps d'un lieu à partir d'une adresse
   *  https://nominatim.openstreetmap.org/search?q=215+rue+d'arras+59000+Lille&format=json&polygon_geojson=1&addressdetails=1
   *  Attention! Certains formats d'adresse ne sont pas compatible avec Nominatim!
  **/
  buildNominatimRequest(){
    const myUrlWithParams = new URL(Lieu.nominatimUrl);
    myUrlWithParams.searchParams.append("q", this.adresse);
    myUrlWithParams.searchParams.append("format", "json");
    myUrlWithParams.searchParams.append("polygon_geojson", "1");
    myUrlWithParams.searchParams.append("addressdetails", "1");    
    return myUrlWithParams.href;
  }
  /**
   * 
   * @returns Coordinates
   */
  async getCoordinates(){  
 
  if (this.coordinates === null) {
    
    let coord;
    await fetch(this.buildNominatimRequest())
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(value) {
      
      
      
      coord=new Coordinates( value[0].lat,value[0].lon);
      
    })
    .catch(function(err) {
      
    });
    
    this.coordinates=coord;
    return this.coordinates;
  }
  return this.coordinates;


};

};
export class Coordinates{

  lat;
  long;
  constructor(lat,long){
    this.lat=lat;
    this.long=long;
  }

  getLat(){
    return this.lat;
  }
   getLong(){
    return this.long;
   }
}

