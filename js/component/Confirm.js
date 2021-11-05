import Preferences from "./Preferences.js"
import User from "./User.js"
class Confirm 
{
    static #mainDiv = null


    static render = () =>
    {
        Confirm.#init()
        const userInfo = Confirm.#getInfos()
        Confirm.#displayUserInfos(userInfo)
    }

    static #init = () =>
    {
        Confirm.#mainDiv = document.querySelector('#main')
    }

    static #getInfos = () =>
    {
        return User.getInfos()
    }

    static #displayUserInfos = (userInfo) =>
    {
        Confirm.#mainDiv.innerHTML = `
                <div class="col-12 col-md-6 d-flex text-center flex-column justify-content-center align-content-center">
                    <h2>Hello ${userInfo.firstname} ${userInfo.lastname}</h2>
                    <p>Email: ${userInfo.email}</p>
                    <p>Tel: ${userInfo.tel}</p>
                </div>
                <div class="col-12 col-md-6 text-center justify-items-center ">
                    <h2>Your Preference:</h2>
                    <div class="row justify-content-center mb-3 mb-md-0">
                        <div class="col-6 d-flex justify-content-center cardVP">
                            <img src="${userInfo.preference}" alt="preference">
                        </div>
                        <style class="hover"></style>
                    </div>
                    
                </div>
                <div class="col-12 col-md-6 d-flex text-center flex-column justify-content-center align-content-center">
                    <h2>Address:</h2>
                    <p>Rue: ${userInfo.address.streetNumber} ${userInfo.address.streetName}</p>
                    <p>Code Postal: ${userInfo.address.streetZipcode}</p>
                    <p>Ville: ${userInfo.address.streetCity}</p>
                </div>`
        Preferences.animation()
    }
}

export default Confirm