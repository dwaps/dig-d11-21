export class User {
  static STORAGE_KEY = "users";
  
  constructor(pseudo, password, email) {
    this.pseudo = pseudo;
    this.password = password;
    this.email = email;
  }

  static hashPassword(pwd) {
    let hashed = [...pwd].map(v => v.charCodeAt(0)).join('');
    while (hashed.length < 40) hashed += hashed;
    return hashed;
  }

  static findAll() {
    return JSON.parse(localStorage.getItem(User.STORAGE_KEY)) || [];
  }

  save() {
    if (!this.exists()) {
      const users = User.findAll();
      // Si l'email est déjà pris, on coupe court à la fonction !
      // --> Pas de sauvegarde de l'utilisateur
      if (this.email) {
        for (let { email } of users) {
          if (email == this.email) return;
        }
      }
      // Sinon on peut sauvegarder
      localStorage.setItem(User.STORAGE_KEY, JSON.stringify([ ...users, this ]));
    } 
  }

  exists() {
    const users = User.findAll();
    if (users) {
      return !!users.find(user => (
        user.pseudo == this.pseudo && user.password == this.password
      ));
    }
    return false;
  }
}
