class Form
{
    static required = false

    static render(option)
    {
        const root = document.querySelector('#main')
        root.innerHTML = `<form class='needs-validation' novalidate>`
        const form = document.querySelector('.needs-validation')
        if (!option)
        {
            form.innerHTML += Form.#default()
        }
        else if (option === 1)
        {
            form.innerHTML += Form.#addNameInput()
            form.innerHTML += Form.#addEmailInput()
            form.innerHTML += Form.#addPasswordInput()
            form.innerHTML += Form.#addTelInput()
        }
        else if (option === 2)
        {
            form.innerHTML += Form.#addAddressInputs()
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
                <label for="streetNumber">Numéro de rue</label>
                <div class="input-group has-validation">
                    <input id='streetNumber' class='form-control' type="number" required=${Form.required}>
                    <div class="invalid-feedback">
                        Veuillez renseigner votre numéro de rue
                    </div>
                </div>
            </div>
            <div class="col-7 col-md-">
                <label for="streetName">Nom de Rue</label>
                <div class="input-group has-validation">
                    <input id='streetName' class='form-control' type="text" required=${Form.required}>
                    <div class="invalid-feedback">
                        Veuillez renseigner votre nom de rue
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col">
                <label for="streetZipcode">Code Postal</label>
                <div class="input-group has-validation">
                    <input autocomplete="postal-code" id='streetZipcode' class='form-control' type="number" required=${Form.required}>
                    <div class="invalid-feedback">
                        Sample Text
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label for="streetCity">Ville</label>
                <div class="input-group has-validation">
                    <input id='streetCity' class='form-control' type="text" required=${Form.required}>
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



    static verify()
    {
        const firstname = document.querySelector('#firstnameInput').value
        const lastname = document.querySelector('#lastnameInput').value
        const email = document.querySelector('#emailInput').value
        const pwd = document.querySelector('#pwdInput').value
        const confPwd = document.querySelector('#confPwdInput').value
        const tel = document.querySelector('#telInput').value
        const errors = []
        if (firstname.length < 0 || lastname.length < 0 || 
            email.length < 0 || pwd.length < 0 || 
            confPwd.length < 0 || tel.length < 0 ) {
                errors.push('Veuillez renseigner tous les champs')
            }
        else if (pwd !== confPwd) {
            errors.push('Veuillez faire correspondre les password')
        } else {
            // Create User
        }
        const div = document.querySelector('#errorsForm')
        div.innerHTML = ''
        errors.forEach(error => div.innerHTML +=`<p class='text-center'>${error}</p>`)
        return !!errors.length
    }
}

export default Form