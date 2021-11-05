export class User {
/* STATIC */
/* STATIC.Private */

    // Constantes
    static #STORAGE_KEY = "userListe";
    static #SESSION_KEY = "userConnected";

    //=> Hasher le mot de passe saisi (dans le constructeur pour inscription & connection)
    static #hashPassword(pwd) {
        let hashed = [...pwd].map(v => v.charCodeAt(0)).join('');
        hashed = hashed.repeat(20).split('');
        hashed.length = 40;
        return hashed.join('');
    }

    //=> Récupèrer tous les users inscrits
    static #findAll() {
        return JSON.parse(localStorage.getItem(User.#STORAGE_KEY)) || [];
    }

    
/* STATIC.Public */

    //=> Supprimer les infos du user connecté
    static logout() {
        sessionStorage.removeItem(User.#SESSION_KEY);
    }


/* CONSTRUCTEUR */

    constructor(email, password, prenom, nom) {
        this.email = email;
        this.password = User.#hashPassword(password);
        this.prenom = prenom;
        this.nom = nom;
    }


/* NON STATIC */
/* NON STATIC.Private */

    //=> Vérifier que la combinaison email + mot de passe est bien la même que dans la SessionStorage
    #isPwdOK() {
        const users = User.#findAll();
        if (users) {
            const user = users.find(user => (user.email == this.email && user.password == this.password));
            if(user){
                // On récupère le prénom et le nom pour l'afficher...
                this.prenom = user.prenom;
                this.nom = user.nom;
                return true;
            }
        }
        return false;
    }    


/* NON STATIC.Public */

    //=> S'incrire dans la liste des utilisateurs autorisés à se connecter
    signUp() {
        const users = User.#findAll();
        localStorage.setItem(User.#STORAGE_KEY, JSON.stringify([ ...users, this ]));
    }

    //=> Se connecter si le mot de passe est OK
    login() {
        if(this.#isPwdOK()){         
            sessionStorage.setItem(User.#SESSION_KEY, JSON.stringify(this));
            return true;
        }
        return false;
    }

    //=> Vérifier si le mail existe déjà dans la liste des utilisateurs autorisés à se connecter
    exists() {
        const users = User.#findAll();
        return users
            && !!users.find(user => (user.email == this.email));
    }
}
