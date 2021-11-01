
import Controls from './component/Controls.js'
import Steps from './component/Steps.js'
import Preferences from './component/Preferences.js'
import Router from './component/Router.js'

class App
{
    constructor()
    {
        App.main()
    }

    static main = () =>
    {
        Router.main()
    }
}

export default App