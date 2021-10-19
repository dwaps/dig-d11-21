export class User {
    static SESSION_KEY = "userConnected";

    constructor(pseudo,password,email) {
        this.pseudo = pseudo;
        this.password = password;
        this.email = email;
    }
    // End of constructor

    static isConnected() {
        return !!sessionStorage.getItem(User.SESSION_KEY);
    }

    //TODO: Connecter le logout
    static logout(){
        sessionStorage.removeItem(User.SESSION_KEY);
    }

    login(){
        sessionStorage.setItem(User.SESSION_KEY, JSON.stringify(this));
        console.log(sessionStorage.setItem(User.SESSION_KEY, JSON.stringify(this)));
        return true;
    }

    //TODO: Hash le mot de passe et utliser la méthode dans le app.js


}