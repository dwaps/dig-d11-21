export class Bornes {
    constructor(ad_station, geo_point_2d, statut_pdc, id_pdc) {
        this.fields = {ad_station, geo_point_2d, statut_pdc,id_pdc};
    }

    static findAll() {
        return fetch("../database/bornes.json").then(res => res.json()).then(data => data);
    }
}