/**
 * CONSIGNE
 * Extraire le nombre le plus grand d'une liste donnée.
 * 
 * 1- L'algorithme fera l'objet d'une fonction.
 * 2- La liste devra être fournie par l'utilisateur.
 * 3- Afficher le résultat sur la console du navigateur.
 */

const app = {
  init() {
    document.getElementById("button").onclick = this.reload;
    const max = this.getListe();
    if (max) this.displayResult(max);
  },
  getListe() {
    const liste = prompt("Saisir une liste de nombres (séparés par un espace)").split(" ");
    return this.maxOf(liste);
  },
  maxOf(liste) {
    let value = 0;
    for (let listItem of liste) {
      if (listItem > value) value = +listItem;
    }
    return value;
  },
  reload() {
    location.reload();
  },
  displayResult(max) {
    document.getElementById("result").hidden = false;
    document.getElementById("output").value = max;
  }
};

app.init();
