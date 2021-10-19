import { Router } from "./router.js"

export class App {
	constructor() {

	}

	static start() {
		this.initBtn();
	}

	static initBtn() {
		console.log('init des boutons !')
		const nextBtn = document.getElementById('next')
		const prevBtn = document.getElementById('prev')

		prevBtn.addEventListener('click', () => {
			switch (Router.currentRoute) {
				case Router.Route.PAGE2:
					location.href = "?page1"
					break;

				case Router.Route.PAGE3:
					location.href = "?page2"
					break;

				case Router.Route.PAGE4:
					location.href = "?page3"
					break;

				default:
					break;
			}
		})

		nextBtn.addEventListener('click', e => {
			switch (Router.currentRoute) {
				case Router.Route.PAGE1:
					location.search = "?page2"
					break;

				case Router.Route.PAGE2:
					location.href = "?page3"
					break;

				case Router.Route.PAGE3:
					location.href = "?page4"
					break;

				default:
					break;
			}
		})
	}

}
