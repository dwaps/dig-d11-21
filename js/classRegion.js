export class Region {
    contructor(id, nom, lat, lon, zoom) {
      this.id = id;
      this.nom = nom;
      this.gps = {lat, lon};
      this.zoom = zoom;
    }

    static findAll() {
      return fetch("./res/data.json")
        .then(res => res.json())
        .then(data => data.regions);
    }
  }

