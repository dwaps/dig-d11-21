export class Page3 {
	constructor() {
	}
	/**
	 * Check the form at page 3
	 * @returns {boolean} true if it pass the control otherwise false
	 */
	static formControl() {
		// Need to be done on Back side
		const form = document.getElementById('page-3-form')
		const lastName = form[0].value
		const firstName = form[1].value
		let telephone = form[2].value
		const roadNumber = form[3].value
		const address = form[4].value
		console.log('address is :', address)
		const city = form[5].value
		let zip = form[6].value
		telephone = telephone.split(' ').join('')
		zip = zip.split(' ').join('')

		const regexSpecialCaractere = /[@&"'`~^#{}<>_=\[\]()!:;,?./§$£€*\+]+/
		const simpleRegex = /[<>{}]+/
		const regexNumber = /^[0-9]+$/

		let isOk = true

		if (regexSpecialCaractere.test(lastName) || regexSpecialCaractere.test(firstName)) isOk = false
		if (!regexNumber.test(telephone)) isOk = false
		if (telephone.length < 10 || telephone.length > 11) isOk = false
		if (!regexNumber.test(roadNumber)) isOk = false
		if (simpleRegex.test(address)) isOk = false
		if (simpleRegex.test(city)) isOk = false
		if (!regexNumber.test(zip)) isOk = false

		console.log('isOk is :', isOk)

		return isOk
	}
}
