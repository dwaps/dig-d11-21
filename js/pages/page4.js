export class Page4 {
	static SESSION_USER_KEY = "user"
	static SESSION_ADDRESS_KEY = "address"
	static SESSION_CATEGORIES_KEY = "categories"

	constructor() {
	}

	static initialization() {
		//TODO get all data and show it to the user
		const user = JSON.stringify(sessionStorage.getItem('user'))
		console.log('user is :', user)
	}
}
