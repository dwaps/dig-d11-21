import { HomePage } from "./home-page.js";
import { User } from "./user.js";

export class Router {
  static currentRoute = "";

  static Route = class {
    static HOME = "home";
    static SIGNUP = "signup";
    static LOGIN = "login";
    static LOGOUT = "logout";
  }
  
  static run() {
    switch (location.search.substring(1)) {
      case "":
      case Router.Route.SIGNUP:
        Router.currentRoute = this.Route.SIGNUP;
        Router.loadView('INSCRIPTION');
        break;
      case Router.Route.LOGIN:
        Router.currentRoute = this.Route.LOGIN;
        Router.loadView('CONNEXION');
        break;
      case Router.Route.LOGOUT:
        User.logout();
        // location.reload();
        location.href = "/";
        break;
      default:
        if (User.isConnected()) {
          Router.currentRoute = this.Route.HOME;
          Router.loadView('HOME');
        }
        else {
          location.href = "/";
        }
        break;
    }
  }

  static loadView(name = 'INSCRIPTION') {
    const container = document.querySelector('.container-fluid');
    const connectForm = document['connect-form'];
    const loginLink = document.querySelector('[href$=login]');
    const signupLink = document.querySelector('[href$=signup]');
    const homeSection = document.querySelector('#home');
    const isSignupPage = name.includes('INS');

    container.className = "container-fluid " + Router.currentRoute + "-page";
    
    if (Router.currentRoute == "home") {
      connectForm.hidden = true;
      homeSection.hidden = false;
      new HomePage();
      return;
    }

    signupLink.hidden = isSignupPage;
    loginLink.hidden = !isSignupPage;
  }
}
