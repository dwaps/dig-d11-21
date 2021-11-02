export class Address {
	static SESSION_KEY = "address"

	constructor(lastName, firstName, telephone, roadNumber, address, city, zip) {
		this.lastName = lastName
		this.firstName = firstName
		this.telephone = telephone
		this.roadNumber = roadNumber
		this.address = address
		this.city = city
		this.zip = zip
	}

	save() {
		console.log('Address saved in sessionStorage !')
		sessionStorage.setItem(Address.SESSION_KEY, JSON.stringify(this))
	}
}
