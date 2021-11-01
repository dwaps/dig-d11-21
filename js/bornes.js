export class Bornes {
    constructor(fields, geometry){
        this.fields= fields;
        this.geometry = geometry;
    }

    static findAll() {
        return fetch("https://opendata.paris.fr/api/records/1.0/search/?dataset=belib-points-de-recharge-pour-vehicules-electriques-disponibilite-temps-reel&q=&facet=statut_pdc&facet=postal_code&facet=last_updated&refine.postal_code=75010").then(res => res.jason());
    }

}