export class Profile {
	static STORAGE_KEY = "profile"

	/**
	 * @param {Object} user An object with same parameters as User
	 * @param {String[][]} categories 
	 * @param {Object} address An object with same parameters as User
	 */
	constructor(user, categories, address) {
		this.user = user
		this.categories = categories
		this.address = address
	}

	static findAll() {
		return JSON.parse(localStorage.getItem(Profile.STORAGE_KEY)) || []
	}

	save() {
		const oldProfile = Profile.findAll()
		localStorage.setItem(Profile.STORAGE_KEY, JSON.stringify([...oldProfile, this]))
	}
}
