import { Page1 } from "./pages/page1.js"
import { Page2 } from "./pages/page2.js"
import { Page3 } from "./pages/page3.js"
import { Router } from "./router.js"
import { User } from "./user.js"
import { Address } from "./address.js"

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
						user.save()

						// TODO Check if the email is already used (dans les profiles enregistré dans le localstorage)
						location.search = "?page2"
					} else {
						console.error("There is an error in the form !")
						// TODO visuel à la page 1
					}
					break;

				case Router.Route.PAGE2:
					Page2.saveCategories()
					location.href = "?page3"
					break;

				case Router.Route.PAGE3:
					if (Page3.formControl()) {
						const form = document.getElementById('page-3-form')
						const lastName = form[0].value
						const firstName = form[1].value
						let telephone = form[2].value
						const roadNumber = form[3].value
						const address = form[4].value
						console.log('address is :', address)
						const city = form[5].value
						const zip = form[6].value
						telephone = telephone.split(' ').join('')

						const newAddress = new Address(lastName, firstName, telephone, roadNumber, address, city, zip)
						console.log('newAddress is :', newAddress)
						newAddress.save()
					} else {
						console.error("There is an error in the form !")
						//TODO visuel à la page 3
					}
					location.href = "?page4"
					break;
			}
		})
	}

}
