export class User {
  static STORAGE_KEY = "users";
  static SESSION_KEY = "connectedUser";
  
  constructor(pseudo, password, email) {
    this.pseudo = pseudo;
    this.password = password;
    this.email = email;
  }

  static hashPassword(pwd) {
    let hashed = [...pwd].map(v => v.charCodeAt(0)).join('');
    hashed = hashed.repeat(20).split('');
    hashed.length = 40;
    return hashed.join('');
  }

  static findAll() {
    return JSON.parse(localStorage.getItem(User.STORAGE_KEY)) || [];
  }

  save() {
    if (!this.exists()) {
      const users = User.findAll();
      if (this.email) {
        for (let { email } of users) {
          if (email == this.email) return;
        }
      }
      localStorage.setItem(User.STORAGE_KEY, JSON.stringify([ ...users, this ]));
    } 
  }

  login() {
    if (this.exists()) {
      sessionStorage.setItem(User.SESSION_KEY, JSON.stringify(this));
      return true;
    }
    return false;
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
