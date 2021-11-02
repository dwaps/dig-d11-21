export class User {
	static SESSION_KEY = "user"

	constructor(lastName, firstName, email, password, telephone) {
		this.lastName = lastName
		this.firstName = firstName
		this.email = email
		this.password = password
		this.telephone = telephone
	}

	static findAll() {
		return JSON.parse(localStorage.getItem(User.STORAGE_KEY)) || []
	}

	/**
	 * This function check the existance or not of the user in the database
	 * @returns {boolean}
	 */
	exists() {
		const users = User.findAll()
		if (users) {
			return !!users.find(user => (
				user.email == this.email
			))
		}
		return false
	}

	/**
	 * save the first form on the session storage and add it ot the local storage
	 */
	save() {
		if (!this.exists()) {
			const users = User.findAll()
			if (this.email) {//TODO check the necessity of this if; it's already check on exist
				for (let { email } of users) {
					if (email == this.email) {
						console.log("Email déjà utilisé !");
						return
					}
				}
			}
			// localStorage.setItem(User.STORAGE_KEY, JSON.stringify([...users, this]))
			// TODO: clean code on ajoute toutes les données dans le session et une fois validé, on enregistre dans la base de données(ici le local storage)
		}
		console.log('user saved in sessionStorage! ');
		sessionStorage.setItem(User.SESSION_KEY, JSON.stringify(this))
	}

	saveCategories() {

	}

	/**
	 * //TODO
	 * return the user with the right email in the session storage
	 * @param {String} email 
	 * @returns new User(....)
	 */
	static findOne() {
		return
	}

}
