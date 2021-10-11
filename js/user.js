export class User {
  static STORAGE_KEY = "users";
  
  constructor(pseudo, password, email) {
    this.pseudo = pseudo;
    this.password = password;
    this.email = email;
  }

  static findAll() {
    return JSON.parse(localStorage.getItem(User.STORAGE_KEY)) || [];
  }

  save() {
    const users = User.findAll();
    localStorage.setItem(User.STORAGE_KEY, JSON.stringify([ ...users, this ]));
  }
}
