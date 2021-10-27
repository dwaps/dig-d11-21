import { Customer } from "./customer.model.js";


const submitInfoPerso = document.getElementById('submitInfoPerso')

submitInfoPerso.addEventListener("click", () => {

    const lastname = document.querySelector("input[name=lastname]").value;
    const firstname = document.querySelector("input[name=firstname]").value;
    const email = document.querySelector("input[name=email]").value;
    const password = document.querySelector("input[name=pwd]").value;
    const confPassword = document.querySelector("input[name=cpwd]").value;
    const phone = document.querySelector("input[name=phoneNumber]").value;

    if (password === confPassword && password.length > 6) {
        const customer = new Customer(lastname, firstname, email, password, phone);
        customer.password = Customer.hashPassword(customer.password);
        customer.save();
    } else {
        alert("Le mot de passe n'est pas identique ou ne comporte pas plus de 6 caractères")
        location.reload();
    }
})


