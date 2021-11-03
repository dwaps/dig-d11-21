import User from './User.js'
class Form
{
    static required = false

    static render(option)
    {
        const root = document.querySelector('#main')
        root.innerHTML = `<form class='needs-validation' novalidate>`
        const form = document.querySelector('.needs-validation')
        if (option === 0)
        {
            form.innerHTML += Form.#addNameInput()
            form.innerHTML += Form.#addEmailInput()
            form.innerHTML += Form.#addPasswordInput()
            form.innerHTML += Form.#addTelInput()
        }
        else if (option === 2)
        {
            form.innerHTML = Form.#addAddressInputs()
        }
        else 
        {
            form.innerHTML += Form.#default()
        }
        form.innerHTML += `<div id='errorsForm'></div>`
    }

    static #addNameInput = () =>
    {
        const row = `
        <div class="row">
            <div class="col">
                <label for="lastnameInput">Nom</label>
                <div class="input-group has-validation">
                    <input id='lastnameInput'  class='form-control' type="text" placeholder="HADDOCK" required=${Form.required}>
                    <div class="invalid-feedback">
                        Veuillez renseigner votre Nom
                    </div>
                </div>
            </div>
            <div class="col">
                <label for="firstnameInput">Prénom</label>
                <div class="input-group has-validation">
                    <input id='firstnameInput' class='form-control' type="text" placeholder="Capitaine" required=${Form.required}>
                    <div class="invalid-feedback">
                        Veuillez renseigner votre Prénom
                    </div>
                </div>
            </div>
        </div>`
        return row
    }

    static #addEmailInput = () =>
    {
        const row = `
        <div class="row">
				<div class="col">
					<label for="emailInput">Adresse e-mail</label>
                    <div class="input-group has-validation">
                        <input id='emailInput' class='form-control' type="email" placeholder="bachibouzouk@gmail.com" required=${Form.required}>
                        <div class="invalid-feedback">
                            Veuillez renseigner votre Email
                        </div>
                    </div>
				</div>
			</div>`
        return row
    }

    static #addPasswordInput = () =>
    {
        const row = `
        <div class="row">
				<div class="col">
					<label for="pwdInput">Password</label>
                    <div class="input-group has-validation">
                        <input id='pwdInput' class='form-control' type="password" required=${Form.required}>
                        <div class="invalid-feedback">
                            Veuillez renseigner votre password
                        </div>
                    </div>
				</div>
				<div class="col">
					<label for="confPwdInput">Confirmez Password</label>
                    <div class="input-group has-validation">
                        <input id='confPwdInput' class='form-control' type="password" required=${Form.required}>
                        <div class="invalid-feedback">
                            Veuillez renseigner votre password
                        </div>
                    </div>
				</div>
			</div>`
        return row
    }

    static #addTelInput = () =>
    {
        const row = `
        <div class="row">
				<div class="col">
					<label for="telInput">Téléphone</label>
                    <div class="input-group has-validation">
                        <input id='telInput' class='form-control' type="tel" placeholder="0987654321" required=${Form.required}>
                        <div class="invalid-feedback">
                            Veuillez renseigner votre Téléphone
                        </div>
                    </div>
				</div>
			</div>`
        return row
    }

    static #addAddressInputs = () => 
    {
        const row = `
        <div class="row">
            <div class="col-5 col-md-3">
                <label for="streetNumberInput">Numéro de rue</label>
                <div class="input-group has-validation">
                    <input id='streetNumberInput' class='form-control' type="number" required=${Form.required}>
                    <div class="invalid-feedback">
                        Veuillez renseigner votre numéro de rue
                    </div>
                </div>
            </div>
            <div class="col-7 col-md-9">
                <label for="streetNameInput">Nom de Rue</label>
                <div class="input-group has-validation">
                    <input id='streetNameInput' class='form-control' type="text" required=${Form.required}>
                    <div class="invalid-feedback">
                        Veuillez renseigner votre nom de rue
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label for="streetZipcodeInput">Code Postal</label>
                <div class="input-group has-validation">
                    <input autocomplete="postal-code" id='streetZipcodeInput' class='form-control' type="number" required=${Form.required}>
                    <div class="invalid-feedback">
                        Sample Text
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label for="streetCityInput">Ville</label>
                <div class="input-group has-validation">
                    <input id='streetCityInput' class='form-control' type="text" required=${Form.required}>
                    <div class="invalid-feedback">
                        Sample Text
                    </div>
                </div>
            </div>
        </div>
        
        `
        return row
    }
    
    static #default = () =>
    {
        const row = `
        <div class="row">
				<div class="col">
					<label for="default">Default</label>
                    <div class="input-group has-validation">
                        <input id='telInput' class='form-control' type="text" required=${Form.required}>
                        <div class="invalid-feedback">
                            Sample Text
                        </div>
                    </div>
				</div>
			</div>`
        return row
    }



    static verify(param)
    {
        const errors = []
        if (param === 1)
        {
            const firstname = document.querySelector('#firstnameInput').value
            const lastname = document.querySelector('#lastnameInput').value
            const email = document.querySelector('#emailInput').value
            const pwd = document.querySelector('#pwdInput').value
            const confPwd = document.querySelector('#confPwdInput').value
            const tel = document.querySelector('#telInput').value
            if (firstname.length < 1 || lastname.length < 1 || 
                email.length < 1 || pwd.length < 1 || 
                confPwd.length < 1 || tel.length < 1 ) {
                    errors.push('Veuillez renseigner tous les champs')
            }
            else if (pwd !== confPwd) {
                errors.push('Veuillez faire correspondre les password')
            } else {
                User.newEntry(firstname, lastname, email,pwd, tel)
            }
        }
        else if (param === 2)
        {
            const streetNumber = document.querySelector('#streetNumberInput').value
            const streetName = document.querySelector('#streetNameInput').value
            const streetZipcode = document.querySelector('#streetZipcodeInput').value
            const streetCity = document.querySelector('#streetCityInput').value
            if (streetNumber.length < 1 || streetName.length < 1 || 
                streetZipcode.length < 1 || streetCity.length < 1 ) {
                    errors.push('Veuillez renseigner tous les champs')
            } else {
                User.setAddress({streetNumber, streetName, streetZipcode, streetCity})
            }
        }
        const errorsDiv = document.querySelector('#errorsForm')
        errorsDiv.innerHTML = ''
        errors.forEach(error => errorsDiv.innerHTML +=`<p class='text-center'>${error}</p>`)
        return !!errors.length
    }
}

export default Form