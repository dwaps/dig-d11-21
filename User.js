export class User{
    static SESSION_KEY = "connectedUser";
    name;

    constructor(name){
        this.name=name;
    }
    static isConnected() {
        return !!sessionStorage.getItem(User.SESSION_KEY);
      }
    static logOut(){
        sessionStorage.removeItem(User.SESSION_KEY);

    }
     static login(user){
        sessionStorage.setItem(User.SESSION_KEY, user);   


    }
    static getPseudo(){
        if(User.isConnected())
        return JSON.parse( sessionStorage.getItem(User.SESSION_KEY)).nom;
        else return null;
    }
}