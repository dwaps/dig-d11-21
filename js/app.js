import { User } from "./user.js";

export class App {
  constructor() {
    const connectForm = document["connect-form"];

    connectForm.addEventListener('submit', e => {
      e.preventDefault();

      const pseudo = connectForm.pseudo.value;
      const password = connectForm.password.value;
      const email = connectForm.email.value;

      if (pseudo && password && password.length > 3) {
        const user = new User(pseudo, password, email);
        user.password = User.hashPassword(user.password);
        user.save();
        location.search = "login";
      }
    });
  }
}
