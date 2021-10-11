export class User {
  static STORAGE_KEY = "user";
  
  constructor(pseudo, password, email) {
    this.pseudo = pseudo;
    this.password = password;
    this.email = email;
  }

  save() {
    localStorage.setItem(User.STORAGE_KEY, JSON.stringify(this));
  }
}
