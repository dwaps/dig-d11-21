export class Page2 {
	constructor() {
	}

	static SESSION_KEY = "categories"

	/**
	 * Save catégories in the sessionStorage
	 */
	static saveCategories() {
		const checkboxes = document.querySelectorAll('.page-2 .checkbox')
		const categories = new Map()

		for (const checkbox of checkboxes) {
			categories.set(checkbox.name, checkbox.checked)
		}
		
		//We need to change the Map to an object before storing it in the sessionStorage otherwise we get an empty Object.
		sessionStorage.setItem(this.SESSION_KEY, JSON.stringify([...categories]))
	}

}