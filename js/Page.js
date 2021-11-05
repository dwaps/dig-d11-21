import { User } from './User.js';

export class Page {
/* STATIC */
/* STATIC.Private */

    // Constantes pour typer les messages affichés sur la page
    static #MSG_OK = "text-success";
    static #MSG_KO = "text-danger";

    
/* STATIC.Public */
/* CONSTRUCTEUR */

    constructor(){

        // Gérer le menu qui réduit de hauteur sur le scroll
        this.#setMenuHeightScroll();

        // Gérer le menu Burger / page responsive
        this.#setMenuBurger();

        // Gérer les boutons du formulaire
        this.#gererLesBoutons();
    }


/* NON STATIC */
/* NON STATIC.Private */

    //=> Gérer le menu qui réduit de hauteur sur le scroll
    #setMenuHeightScroll() {
        window.onscroll = function() {
            const classListSearched = '.navbar-brand,section h2';
            const classScrolled = 'scrolled';
      
            // Si le scroll dépasse 100, on ajoute la classe 'scrolled' sur les éléments qui doivent être réduits
            if(document.documentElement.scrollTop > 100
            && !document.querySelector(classListSearched).classList.contains(classScrolled)){
                const listElements = document.querySelectorAll(classListSearched);
                for (let i = 0; i < listElements.length; i++) {
                    listElements[i].classList.add(classScrolled);
                }
            }
            // Si le scroll revient à moins de 5, on retire la classe 'scrolled' sur les éléments qui doivent reprendre leur état initial
            else if(document.documentElement.scrollTop < 5
                && document.querySelector(classListSearched).classList.contains(classScrolled)){
                const listElements = document.querySelectorAll(classListSearched);
                for (let i = 0; i < listElements.length; i++) {
                    listElements[i].classList.remove(classScrolled);
                }
            }
        };
    }

    //=> Gérer le menu Burger / page responsive
    #setMenuBurger() {
        const listElements = document.querySelectorAll('.nav-link');
        for (let i = 0; i < listElements.length; i++) {
            listElements[i].addEventListener( 'click', function(){
                document.querySelector('.navbar-toggler').classList.add('collapsed');
                document.querySelector('.navbar-collapse').classList.remove('show');        
            });
        }
    }

    //=> Gérer les boutons du formulaire
    #gererLesBoutons() {
        // Création d'un alias à this de l'instance de Page car le this dans l'Event handling correspond à l'élément HTML !
        const that = this;                         

        // Tous les boutons du formulaire postent un "submit"...
        const fConnect = document["fConnect"];
        fConnect.addEventListener('submit', e => {
          e.preventDefault();
          
          // Réaliser le traitement correspondant au bouton qui vient d'être cliqué
          that.#gererClickBoutons(e.submitter.id);
        });
    }


    //=> Réaliser le traitement correspondant au bouton qui vient d'être cliqué
    #gererClickBoutons(btnId){
        
        // Remise à zéro de la zone des messages par l'absence de paramètres
        this.#afficheMessage();

        // En fonction de l'id du bouton qui vient d'être cliqué
        switch(btnId){
            case "btnLogin":
                this.#showSign(false);          // On ne doit pas afficher les éléments de "S'inscrire" mais de "SeConnecter"
                break;

            case "btnSign":
                this.#showSign(true);           // On doit afficher les éléments de "S'inscrire" (et donc pas celles de "SeConnecter")
                break;

            case "btnLogout":
                User.logout();                  // Déconnecter l'utilisateur connecté
                this.#showLogout(false);        // On ne doit pas afficher les éléments de "SeDéconnecter"
                this.#showSign(false);          // On ne doit pas afficher les éléments de "S'inscrire" mais de "SeConnecter"
                break;

            case "btnGo":
                // L'utilisateur vient de cliquer sur le bouton "Go"
                
                // Si le bouton actif était "SeConnecter" Alors il faut se connecter
                // Sinon il faut s'inscrire (le bouton "Go" n'est affiché que pour "SeConnecter" et "SInscrire")
                const  btnLogin = document.getElementById('btnLogin');
                if(btnLogin.classList.contains("btn-primary")){ this.#seConnecter(); }
                else{ this.#sInscrire(); }
                break;
        }
    }


    //=> Afficher les éléments de "S'inscrire" (si true en paramètre) sinon de "SeConnecter" (si false en paramètre)
    #showSign(isSign){
        // On change d'écran, il faut donc vider les champs de saisie du formulaire
        document.getElementById("fConnect").reset();    

        // On joue avec les classes des boutons en alternant les classes "btn-primary" (écran sélectionné) & "btn-outline-primary" (écran désélectionné)
        const class1 = isSign ? "btn-primary" : "btn-outline-primary";
        const class2 = isSign ? "btn-outline-primary" : "btn-primary";
        btnLogin.classList.replace(class1,class2);
        btnSign.classList.replace(class2, class1);

        // Certains éléments (avec la classe "modeSign") ne doivent être affichés que pour "SInscrire". Pour les autres éléments, ils sont en commun avec "SeConnecter"
        Array.from(document.getElementsByClassName('modeSign')).forEach((el) => {
            if(isSign) {el.classList.remove('cache');}
            else {el.classList.add('cache');}
        });
    }


    //=> Afficher les éléments (si isLogout=true en paramètre) de "SeDéconnecter", ou pas (si isLogout=false en paramètre)
    #showLogout(isLogout, user){
        // On change d'écran, il faut donc vider les champs de saisie du formulaire
        document.getElementById("fConnect").reset();    

        if(isLogout && user){
            // Si on doit afficher "SeDéconnecter" et si le user est valorisé Alors on affiche un message de bienvenue personnalisé
            let welcome = document.getElementById('txtBienvenue');
            welcome.innerHTML = `Bienvenue ${user.prenom} ${user.nom} !`;
        }
        
        // Certains éléments (avec la classe "logoutOk") ne doivent être affichés que pour "SeDéconnecter"
        Array.from(document.getElementsByClassName('logoutOk')).forEach((el) => {
            if(!isLogout) {el.classList.add('cache');}
            else {el.classList.remove('cache');}
        });
    
        // Certains éléments (avec la classe "logoutKo") ne doivent surtout pas être affichés pour "SeDéconnecter"
        Array.from(document.getElementsByClassName('logoutKo')).forEach((el) => {
            if(isLogout) {el.classList.add('cache');}
            else {el.classList.remove('cache');}
        });
    }


    //=> Inscrire l'utilisateur qui vient de cliquer sur le bouton "GO"
    #sInscrire(){
        const fConnect = document["fConnect"];

        const prenom = fConnect.prenom.value;
        const nom = fConnect.nom.value;
        const email = fConnect.email.value;
        const password = fConnect.password.value;
        const password2 = fConnect.password2.value;
    
        // Contrôles en cascade avec affichage du message d'erreur adéquat dans les "else"
        if (prenom && nom && email && password && password2) {
            if(password == password2){
                const user = new User(email, password, prenom, nom);
                if (!user.exists()) {

                    // Tous les contrôles ont été passés avec succés
                    // alors on enregistre l'utilisateur dans la liste des utisateurs inscrits
                    user.signUp();
                    // Et on affiche un message de confirmation de l'inscription
                    this.#afficheMessage(Page.#MSG_OK, "Votre inscription a bien été prise en compte !" );

                // Messages d'erreur...
                } else{ this.#afficheMessage(Page.#MSG_KO, "L'email fourni a déjà été enregistré" );}
            } else { this.#afficheMessage(Page.#MSG_KO, "Les deux mots de passe doivent être identiques" );}
        } else { this.#afficheMessage(Page.#MSG_KO, "Toutes les données sont obligatoires." );}
    }


    //=> Connecter l'utilisateur qui vient de cliquer sur le bouton "GO"
    #seConnecter(){
        const fConnect = document["fConnect"];

        const email = fConnect.email.value;
        const password = fConnect.password.value;
    
        // Contrôles en cascade avec affichage du message d'erreur adéquat dans les "else"
        if (email && password) {
            const user = new User(email, password);
            if (user.exists()) {
                if (user.login()) {

                    // Tous les contrôles ont été passés avec succés (y compris la connection via login() qui a renvoyé true)
                    // alors on affiche le bouton "SeDéconnecter" et le message de bienvenue personnalisé
                    this.#showLogout(true, user);

                // Messages d'erreur...
                } else { this.#afficheMessage(Page.#MSG_KO, "Le mot de passe est incorrect");}
            } else { this.#afficheMessage(Page.#MSG_KO, "Utilisateur inconnu. Veuillez vous inscrire...");}
        } else { this.#afficheMessage(Page.#MSG_KO, "Toutes les données sont obligatoires.");}
    }
    
    
    //=> Afficher le message d'erreur ou de confirmation (en fonction de msgType)
    #afficheMessage(msgType, msgLib){
        const msgForm = document.getElementById("msgForm");
        msgForm.classList.remove(Page.#MSG_OK, Page.#MSG_KO);
        msgForm.innerHTML = "";
        // Si pas de valeur dans les paramètres en entrée, alors on cache le message (affiché précédemment)
        if(msgType && msgLib){
            msgForm.innerHTML = msgLib;
            msgForm.classList.add(msgType);
        }
    }
        

/* NON STATIC.Public */
}
