/**
 * CONSIGNE
 * Extraire le nombre le plus grand d'une liste donnée.
 * 
 * 1- L'algorithme fera l'objet d'une fonction.
 * 2- La liste devra être fournie par l'utilisateur.
 * 3- Afficher le résultat sur la console du navigateur.
 */

const liste = prompt("Saisir une liste de nombres (séparés par un espace)").split(" ");

function maxOf() {
  let value = 0;
  for (let listItem of liste) {
    if (listItem > value) value = +listItem;
  }
  return value;
}

const max = maxOf();
if (max) {
  result.hidden = false;
  output.value = maxOf();
}

button.onclick = reload;
function reload() {
  location.reload();
}
