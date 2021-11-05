import { User } from './classUser.js';

export class Page {
    static #MSG_OK = "text-success";
    static #MSG_KO = "text-danger";

    static create(){

        /* Gestion du menu qui réduit de hauteur sur le scroll */
        Page.#setMenuHeightScroll();

        /* Gestion du menu Burger / page responsive */
        Page.#setMenuBurger();

        /* Gestion des boutons du formulaire */
        Page.#gererLesBoutons();

    }


    /* Gestion du menu qui réduit de hauteur sur le scroll */
    static #setMenuHeightScroll() {
        window.onscroll = function() {
            const classListSearched = '.navbar-brand,section h2';
            const classScrolled = 'scrolled';
        
            if(document.documentElement.scrollTop > 100
            && !document.querySelector(classListSearched).classList.contains(classScrolled)){
                const listElements = document.querySelectorAll(classListSearched);
                for (let i = 0; i < listElements.length; i++) {
                    listElements[i].classList.add(classScrolled);
                }
            }
            else if(document.documentElement.scrollTop < 5
                && document.querySelector(classListSearched).classList.contains(classScrolled)){
                const listElements = document.querySelectorAll(classListSearched);
                for (let i = 0; i < listElements.length; i++) {
                    listElements[i].classList.remove(classScrolled);
                }
            }
        };
    }

    /* Gestion du menu Burger / page responsive */
    static #setMenuBurger() {
        const listElements = document.querySelectorAll('.nav-link');
        for (let i = 0; i < listElements.length; i++) {
            listElements[i].addEventListener( 'click', function(){
                document.querySelector('.navbar-toggler').classList.add('collapsed');
                document.querySelector('.navbar-collapse').classList.remove('show');        
            });
        }
    }

    /* Gestion du bouton "Se connecter" */
    static #gererLesBoutons() {
        const fConnect = document["fConnect"];
        fConnect.addEventListener('submit', e => {
          e.preventDefault();
          Page.#gererClickBoutons(e.submitter.id);
        });
    }

    static #gererClickBoutons(btnId){
        Page.#afficheMessage();
        const  btnLogin = document.getElementById('btnLogin');
        const  btnSign = document.getElementById('btnSign');
        const  btnLogout = document.getElementById('btnLogout');

        switch(btnId){
            case "btnLogin":
                Page.#showSign(false);
                break;
            case "btnSign":
                Page.#showSign(true);
                break;
            case "btnLogout":
                document.getElementById("fConnect").reset();     
                Page.#showLogout(false);
                Page.#showSign(false);
                break;
            case "btnGo":
                if(btnLogin.classList.contains("btn-primary")){
                    Page.#seConnecter();
                }
                else{
                    Page.#sInscrire();
                }
                break;
        }
    }

    static #showSign(isSign){
        const class1 = isSign ? "btn-primary" : "btn-outline-primary";
        const class2 = isSign ? "btn-outline-primary" : "btn-primary";
        btnLogin.classList.replace(class1,class2);
        btnSign.classList.replace(class2, class1);
        Array.from(document.getElementsByClassName('modeSign')).forEach((el) => {
            if(isSign) {el.classList.remove('cache');}
            else {el.classList.add('cache');}
        });
    }

    static #showLogout(isLogout, user){
        if(isLogout && user){
            let welcome = document.getElementById('txtBienvenue');
            welcome.innerHTML = `Bienvenue ${user.prenom} ${user.nom}, heureux de vous revoir !`;
        }
        
        Array.from(document.getElementsByClassName('logoutOk')).forEach((el) => {
            if(!isLogout) {el.classList.add('cache');}
            else {el.classList.remove('cache');}
        });

        Array.from(document.getElementsByClassName('logoutKo')).forEach((el) => {
            if(isLogout) {el.classList.add('cache');}
            else {el.classList.remove('cache');}
        });
    }

    static #seConnecter(){
        const fConnect = document["fConnect"];
        const email = fConnect.email.value;
        const password = fConnect.password.value;

        if (email && password) {
            const user = new User(email, User.hashPassword(password));

            if (!user.exists()) {
                Page.#afficheMessage(Page.#MSG_KO, "Utilisateur inconnu. Veuillez vous inscrire...");
            }
            else {
                if (user.login()) {
                    Page.#showLogout(true, user);
                }
                else{
                    Page.#afficheMessage(Page.#MSG_KO, "Le mot de passe est incorrect");
                }
            }
        }
        else{
            let msg = "Toutes les données sont obligatoires.";
            Page.#afficheMessage(Page.#MSG_KO, msg );
        }
    }

    static #sInscrire(){
        const fConnect = document["fConnect"];
        const prenom = fConnect.prenom.value;
        const nom = fConnect.nom.value;
        const email = fConnect.email.value;
        const password = fConnect.password.value;
        const password2 = fConnect.password2.value;

        if (prenom && nom && email && password && password2) {
            if(password == password2){
                const user = new User(email, User.hashPassword(password), prenom, nom);
                if (!user.exists()) {
                    user.save();
                    Page.#afficheMessage(Page.#MSG_OK, "Votre inscription a bien été prise en compte !" );
                }
                else{
                    Page.#afficheMessage(Page.#MSG_KO, "L'email fourni a déjà été enregistré" );
                }
            }
            else{
                Page.#afficheMessage(Page.#MSG_KO, "Les deux mots de passe doivent être identiques" );
            }
        }
        else{
            Page.#afficheMessage(Page.#MSG_KO, "Toutes les données sont obligatoires." );
        }

    
    }


    static #afficheMessage(msgType, msgLib){
        const msgForm = document.getElementById("msgForm");
        msgForm.classList.remove(Page.#MSG_OK, Page.#MSG_KO);
        msgForm.innerHTML = "";
        if(msgType && msgLib){
            msgForm.innerHTML = msgLib;
            msgForm.classList.add(msgType);
        }
    }
}