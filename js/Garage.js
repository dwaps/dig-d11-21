export class Garage {
/* STATIC */
/* STATIC.Private */
/* STATIC.Public */

    //=> Récupérer tous les garages du fichier JSON
    static findAll() {
        return fetch("./res/data.json")
              .then(res => res.json())
              .then(data => data.garages);
    }


/* CONSTRUCTEUR */
    contructor(id, nom, reg, adr, lat, lon, tel, mail) {
        this.id = id;
        this.nom = nom;
        this.pos = {reg, adr, gps : {lat, lon}};
        this.contact = {tel, mail};
    }


/* NON STATIC */
/* NON STATIC.Private */
/* NON STATIC.Public */
}
  