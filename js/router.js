export class Router {
  static run() {
    switch (location.search.substring(1)) {
      case "":
      case "signup":
        Router.loadView('INSCRIPTION');
        break;
      case "login":
        Router.loadView('CONNEXION');
        break;
      case "logout":
        break;
      default:
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
