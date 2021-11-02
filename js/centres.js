export class Centre {
    constructor(nom, adresse, jour, horaires, lat, lon) {
        this.nom = nom;
        this.adresse = adresse;
        this.open = {jour, horaires};
        this.gps = {lat, lon};
    }

    static findAll() {
        return fetch("../database/centres.json").then(res => res.json()).then(data => data);
    }
}