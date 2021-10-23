export class User {
    static SESSION_KEY = "userConnected";

    constructor(pseudo,password,email) {
        this.pseudo = pseudo;
        this.password = password;
        this.email = email;
    }
    // End of constructor

    /**
     * Fonction qui renvoie vraie si l'utilisateur est connecté
     * @returns boolean
     */
    static isConnected() {
        console.log(!!sessionStorage.getItem(User.SESSION_KEY));
        return !!sessionStorage.getItem(User.SESSION_KEY);
    }

    /**
     * Fonction qui enlève les données dans la sessionStorage
     */
    static logout(){
        sessionStorage.removeItem(User.SESSION_KEY);
    }

    /**
     * fonction qui enregistre les données de la sessionStorage (clé, valeur)
     * @returns boolean
     */
    login(){
        sessionStorage.setItem(User.SESSION_KEY, JSON.stringify(this));
        return true;
    }

    /**
     * fonction qui crypte le mot de passe entré dans le formulaire
     * @param {} pwd 
     * @returns pwd hashé
     */
    static hashPassword(pwd){
        let hashed = [...pwd].map(v => v.charCodeAt(0)).join(''); 
        while(hashed.length < 40){
            hashed += hashed;
        }
        return hashed;
    }

}