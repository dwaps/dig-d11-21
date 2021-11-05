export class Region {
/* STATIC */
/* STATIC.Private */
/* STATIC.Public */

    //=> Récupérer toutes les régions du fichier JSON
    static findAll() {
        return fetch("./res/data.json")
              .then(res => res.json())
              .then(data => data.regions);
    }


/* CONSTRUCTEUR */
    contructor(id, nom, lat, lon, zoom) {
        this.id = id;
        this.nom = nom;
        this.gps = {lat, lon};
        this.zoom = zoom;
    }


/* NON STATIC */
/* NON STATIC.Private */
/* NON STATIC.Public */
}
