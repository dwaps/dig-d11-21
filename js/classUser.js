export class User {
    static STORAGE_KEY = "users";
    static SESSION_KEY = "connectedUser";
    
    constructor(email, password, prenom, nom) {
      this.email = email;
      this.password = password;
      this.prenom = prenom;
      this.nom = nom;
    }
  
    static hashPassword(pwd) {
      let hashed = [...pwd].map(v => v.charCodeAt(0)).join('');
      hashed = hashed.repeat(20).split('');
      hashed.length = 40;
      return hashed.join('');
    }
  
    static logout() {
      sessionStorage.removeItem(User.SESSION_KEY);
    }
  
    static findAll() {
      return JSON.parse(localStorage.getItem(User.STORAGE_KEY)) || [];
    }
  
    static isConnected() {
      return !!sessionStorage.getItem(User.SESSION_KEY);
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
      if (this.isPwdOK()) {

        sessionStorage.setItem(User.SESSION_KEY, JSON.stringify(this));
        return true;
      }
      return false;
    }
  
    exists() {
      const users = User.findAll();
      if (users) {
        return !!users.find(user => (user.email == this.email));
      }
      return false;
    }

    isPwdOK() {
      const users = User.findAll();
      if (users) {
        const user = users.find(user => (user.email == this.email && user.password == this.password));
        if(!!user){
          this.prenom = user.prenom;
          this.nom = user.nom;
          return true;
        }
      }
      return false;
    }    

  }
  