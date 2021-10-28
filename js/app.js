import { Page1 } from "./pages/page1.js"
import { Page2 } from "./pages/page2.js"
import { Router } from "./router.js"
import { User } from "./user.js"

export class App {
	constructor() {

	}

	static start() {
		this.initBtn()
	}

	/**
	 * Initilaize the prev and next buttons
	 */
	static initBtn() {
		console.log('init des boutons !')
		const nextBtn = document.getElementById('next')
		const prevBtn = document.getElementById('prev')

		prevBtn.addEventListener('click', () => {
			switch (Router.currentRoute) {
				case Router.Route.PAGE2:
					location.href = "?page1"
					break;

				case Router.Route.PAGE3:
					location.href = "?page2"
					break;

				case Router.Route.PAGE4:
					location.href = "?page3"
					break;
			}
		})

		nextBtn.addEventListener('click', () => {
			switch (Router.currentRoute) {
				case Router.Route.PAGE1:
					if (Page1.formControl()) {
						const form = document.getElementById('page-1-form')
						const lastName = form[0].value
						const firstName = form[1].value
						const email = form[2].value
						const password = form[3].value
						let telephone = form[5].value
						telephone = telephone.split(' ').join('')

						const user = new User(lastName, firstName, email, password, telephone)
						user.save()//TODO revoir l'utilité d'enregistrer dans le local storage dès maintenant piste: enregistrer qu'a la fin

						// TODO Check if the email is already used (dans les profiles enregistré dans le localstorage)
						location.search = "?page2"
					} else {
						console.log("Il y a une erreur dans le formulaire !")
						// TODO visuel à la page 1
					}
					break;

				case Router.Route.PAGE2:
					// TODO add les checkbox au session storage
					Page2.saveCategories()


					location.href = "?page3"
					break;

				case Router.Route.PAGE3:
					location.href = "?page4"
					break;
			}
		})
	}

}
