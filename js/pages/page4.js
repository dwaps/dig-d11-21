import { Profile } from "../profile.js";
export class Page4 {
	static SESSION_USER_KEY = "user"
	static SESSION_ADDRESS_KEY = "address"
	static SESSION_CATEGORIES_KEY = "categories"

	constructor() {
	}

	/**
	 * Get all data from the sessionStorage and show it to the user.
	 */
	static initialization() {
		// Init Fields
		const user = (JSON.parse(sessionStorage.getItem(this.SESSION_USER_KEY)))
		const categories = (JSON.parse(sessionStorage.getItem(this.SESSION_CATEGORIES_KEY)))
		const address = (JSON.parse(sessionStorage.getItem(this.SESSION_ADDRESS_KEY)))

		const lastNameInput = document.querySelector('.last-name')
		const firstNameInput = document.querySelector('.first-name')
		const categoriesInput = document.querySelector('.categories')
		const roadNumberInput = document.querySelector('.road-number')
		const addressInput = document.querySelector('.address')
		const zipInput = document.querySelector('.zip')
		const cityInput = document.querySelector('.city')

		lastNameInput.innerText = `${user.lastName}`
		firstNameInput.innerText = `${user.firstName}`
		for (let i = 0; i < categories.length; i++) {
			if (categories[i][1] == true) {
				categoriesInput.innerHTML += ` <span>${categories[i][0]}</span>`
			}
		}
		roadNumberInput.innerText = `${address.roadNumber}`
		addressInput.innerText = `${address.address}`
		zipInput.innerText = `${address.zip}`
		cityInput.innerText = `${address.city}`

		// Init btn
		const btn = document.getElementById('confirm')
		btn.addEventListener('click', () => {
			//We save the user's data; Here we save it on the localStorage
			const profile = new Profile(user, categories, address)
			profile.save()
			// Then we send a personnal alert
			alert(`Bravo M/Mme ${user.lastName} ${user.firstName}, vous avez fini de renseigner les informations pour votre application de lecture.`)
		})
	}
}
