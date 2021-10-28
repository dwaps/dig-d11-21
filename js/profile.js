export class Profile {

	/**
	 * @param {User} user 
	 * @param {Map} categories 
	 * @param {Adress} address 
	 */
	constructor(user, categories, address) {
		this.user = user
		this.categories = categories
		this.address = address
	}

}