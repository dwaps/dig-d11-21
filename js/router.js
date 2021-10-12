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
        break;
      default:
        Router.currentRoute = this.Route.HOME;
        Router.loadView('HOME');
        break;
    }
  }

  static loadView(name = 'INSCRIPTION') {
    const isSignupPage = name.includes('INS');
    document['connect-form'].className = isSignupPage
      ? 'signup-form'
      : 'login-form';
  }
}
