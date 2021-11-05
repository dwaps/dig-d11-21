import Form from './Form.js'
import Controls from './Controls.js'
import Steps from './Steps.js'
import Preferences from './Preferences.js'
import Confirm from './Confirm.js'

class Router
{
    static #step = null
    
    static main =  () =>
    {
        Router.#init()
        Router.#routing()
        Steps.render()
        Controls.render()
    }

    static #init =  () =>
    {
        const step = parseInt( localStorage.getItem('step'))
        if (!step)
        {
            localStorage.setItem('step', 0)
            Router.#step = 0
        }
        else
        {
            Router.#step = step
        }
    }

    static #routing = () =>
    {
        switch (Router.#step)
        {
            case 0 :
                Form.render(0)
                break
            case 1 :
                Preferences.render()
                break
            case 2 :
                Form.render(2)
                break
            case 3 :
                Confirm.render()
        }
    }
}

export default Router