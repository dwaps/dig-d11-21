import User from "./User.js"
class Confirm 
{
    static #mainDiv = null


    static render = () =>
    {
        Confirm.#init()
        const infos = Confirm.#getInfos()
        console.log(infos);
    }

    static #init = () =>
    {
        Confirm.#mainDiv = document.querySelector('#main')
    }
    static #getInfos = () =>
    {
        return User.getInfos()
    }
}