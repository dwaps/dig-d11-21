import App from "../App.js"
import Form from "./Form.js"
import Router from "./Router.js"

class Controls
{
    static render()
    {
        const step = localStorage.getItem('step')
        const div = document.querySelector('#controls')
        div.innerHTML = `
        <div class="col-2">
            <div class="d-grid gap-2">
                <button id='prevButton' class='btn btn-secondary ${step==0 && 'disabled'}'>Prev</button>
            </div>
        </div>
        <div class="col-2">
            <div class="d-grid gap-2">
                <button id='nextButton' class='btn btn-primary'>Next</button>
            </div>
        </div>`
        Controls.#eventButton()
    }

    static #eventButton()
    {
        const prevButton = document.querySelector('#prevButton')
        prevButton.addEventListener('click', (e) => {
            e.preventDefault()
            let step = parseInt(localStorage.getItem('step'))
            step--
            if (step === 0) prevButton.className = 'btn btn-secondary disabled'
            localStorage.setItem('step', step)
            Router.main()
        })

        const nextButton = document.querySelector('#nextButton')
        nextButton.addEventListener('click', (e) => {
            e.preventDefault()
            let step = parseInt(localStorage.getItem('step'))
            if (step === 0) {
                const errors = Form.verify()
                if (errors) return
            } else if (step === 1) {
                const itemSelected = localStorage.getItem('stepTwoItemSelected')
                if (!itemSelected) return
            }
            step++
            prevButton.className = 'btn btn-secondary'
            localStorage.setItem('step', step)
            Router.main()
        })
    }

    
}

export default Controls