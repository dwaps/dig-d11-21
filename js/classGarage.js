export class Garage {
    contructor(id, nom, reg, adr, lat, lon, tel, mail) {
      this.id = id;
      this.nom = nom;
      this.pos = {reg, adr, gps : {lat, lon}};
      this.contact = {tel, mail};
    }

    static findAll() {
      return fetch("./res/data.json")
        .then(res => res.json())
        .then(data => data.garages);
    }
  }
  