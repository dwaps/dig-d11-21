export class Page1 {
	constructor() {

	}

	/**
	 * Check the form at page 1
	 * @returns {boolean} true if it pass the control otherwise false
	 */
	static formControl() {
		// Need to be done on Back side
		const form = document.getElementById('page-1-form')
		const lastName = form[0].value
		const firstName = form[1].value
		const email = form[2].value
		const password = form[3].value
		const validPassword = form[4].value
		let telephone = form[5].value
		telephone = telephone.split(' ').join('')

		const regexSpecialCaractere = /^[^@&"'`~^#{}<>_=\[\]()!:;,?./§$£€*\+]+$/
		const regexSpecialCaractereForEmail = /^[^&"'`~^#{}<>_=\[\]()!:;,?/§$£€*\+]+$/
		const regexNumber = /^[0-9]+$/

		let isOk = true

		if (!regexSpecialCaractere.test(lastName) || !regexSpecialCaractere.test(firstName)) isOk = false
		if (!regexSpecialCaractereForEmail.test(email)) isOk = false
		if (email.split('@').length != 2 || email.split('@')[1].split('.').length != 2) isOk = false
		if (!regexSpecialCaractere.test(password) && !regexSpecialCaractere.test(validPassword)) isOk = false
		if (password != validPassword) isOk = false
		if (!regexNumber.test(telephone)) isOk = false
		if (telephone.length < 10 || telephone.length > 11) isOk = false


			console.log('isOk is :', isOk)

		return isOk
	}
}