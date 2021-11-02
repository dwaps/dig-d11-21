
export class Router {
	static currentRoute = ""

	constructor() {

	}

	static Route = class {
		static PAGE1 = "page1"
		static PAGE2 = "page2"
		static PAGE3 = "page3"
		static PAGE4 = "page4"
	}

	static run() {
		switch (location.search.substring(1)) {
			case "":
			case Router.Route.PAGE1:
				Router.currentRoute = Router.Route.PAGE1
				this.loadView(Router.currentRoute)
				this.loadProgressBar()
				break

			case Router.Route.PAGE2:
				Router.currentRoute = Router.Route.PAGE2
				this.loadView(Router.currentRoute)
				this.loadProgressBar()
				break

			case Router.Route.PAGE3:
				Router.currentRoute = Router.Route.PAGE3
				this.loadView(Router.currentRoute)
				this.loadProgressBar()

				break

			case Router.Route.PAGE4:
				Router.currentRoute = Router.Route.PAGE4

				this.loadView(Router.currentRoute)
				this.loadProgressBar()
				break

			default:
				location.href = "/"
				break
		}
	}

	static loadView(view = Router.Route.PAGE1) {
		const divP1 = document.querySelector('.page-1')
		const divP2 = document.querySelector('.page-2')
		const divP3 = document.querySelector('.page-3')
		const divP4 = document.querySelector('.page-4')
		const h2 = document.querySelector('h2')

		switch (view) {
			case Router.Route.PAGE1:
				divP2.classList.add('view-disable')
				divP3.classList.add('view-disable')
				divP4.classList.add('view-disable')

				const prevBtn = document.getElementById('prev')
				prevBtn.classList.add('disabled')

				break

			case Router.Route.PAGE2:
				divP1.classList.add('view-disable')
				divP3.classList.add('view-disable')
				divP4.classList.add('view-disable')

				h2.innerText = "Catégories préférées"
				break

			case Router.Route.PAGE3:
				divP1.classList.add('view-disable')
				divP2.classList.add('view-disable')
				divP4.classList.add('view-disable')

				h2.innerText = "Adresse de livraison"
				break

			case Router.Route.PAGE4:
				divP1.classList.add('view-disable')
				divP2.classList.add('view-disable')
				divP3.classList.add('view-disable')

				const nextBtn = document.getElementById('next')
				nextBtn.classList.add('disabled')

				h2.innerText = "Confirmation"
				break

			default:
				break
		}
	}

	static loadProgressBar() {
		const li1 = document.querySelector('ul > li:first-child')
		const li2 = document.querySelector('ul > li:nth-child(2)')
		const li3 = document.querySelector('ul > li:nth-child(3)')
		const li4 = document.querySelector('ul > li:last-child')
		switch (Router.currentRoute) {
			case Router.Route.PAGE1:
				// nothing to do
				break

			case Router.Route.PAGE2:
				li1.classList.add('li-before-modifier')
				li2.classList.add('li-after-modifier')
				break

			case Router.Route.PAGE3:
				li1.classList.add('li-before-modifier')
				li2.classList.add('li-after-modifier')
				li2.classList.add('li-before-modifier')
				li3.classList.add('li-after-modifier')
				break

			case Router.Route.PAGE4:
				li1.classList.add('li-before-modifier')
				li2.classList.add('li-after-modifier')
				li2.classList.add('li-before-modifier')
				li3.classList.add('li-after-modifier')
				li3.classList.add('li-before-modifier')
				li4.classList.add('li-after-modifier')
				break

			default:
				break
		}
	}
}
