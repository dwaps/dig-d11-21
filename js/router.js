import { User } from "./user.js";

export class Router {
    static currentRoute = "";

    static Route = class {
        static HOME = "home";
        static LOGOUT = "logout";
    }

    static run() {
        switch (location.search.substring(1)) {
            case "":
                Router.loadView();
                break;

            case Router.Route.LOGOUT:
                User.logout();
                location.href = "/";
                break;
            default:
                if (User.isConnected()) {
                    Router.currentRoute = this.Route.HOME;
                    Router.loadView('HOME');
                } else {
                    location.href = "/";
                }
                break;
        }
    }

    static loadView() {
        const connectForm = document['connect-form'];
        const homeSection = document.querySelector('#home');
        const textPerso = document.querySelector('#textPerso')
        const user = sessionStorage.getItem(User.SESSION_KEY);
        const dataUser = JSON.parse(user);

        if (Router.currentRoute == "home") {
            connectForm.hidden = true;
            homeSection.hidden = false;
            textPerso.innerHTML = `<h2 class="col-lg">Welcome <span>${dataUser.pseudo}</span></h2>
      <form>
        <div class="col-9 mx-auto mb-3">
        
          <div class="form-label">
            <label for="comments">Object</label>
            <input class="form-control" type="text" placeholder="Enter the object of your request" id="object" name="object" value="">
          </div>

          <div class="form-label">
            <label for="comments">Please write your message</label>
            <textarea class="form-control" name="comments" id="comments" cols="30" rows="10" placeholder="Write your request here!"></textarea>
          </div>
  
          <input class="btn btn-danger mb-3" type="reset" value="Reset">
          <input class="btn btn-success mb-3 disabled" type="submit" value="Send">

        </div>
      </form>`;
            return;
        }

    }
}