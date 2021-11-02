export class User {
	static SESSION_KEY = "user"
	static STORAGE_KEY = "profile"

	constructor(lastName, firstName, email, password, telephone) {
		this.lastName = lastName
		this.firstName = firstName
		this.email = email
		this.password = password
		this.telephone = telephone
	}

	/**
	 * save the first form on the session storage and add it ot the local storage
	 */
	save() {
		sessionStorage.setItem(User.SESSION_KEY, JSON.stringify(this))
	}

	/**
	 * Check the unicity of the mail
	 * @returns {boolean}
	 */
	isAlreadySaved() {
		const profileList = JSON.parse(localStorage.getItem(User.STORAGE_KEY)) || []
		if (profileList == []) {
			return false
		} else {
			for (const { user } of profileList) {
				if (user.email == this.email) {
					return true
				}
			}
		}
		return false
	}

}
