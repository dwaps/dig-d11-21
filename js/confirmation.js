import { Customer } from "./customer.model.js";
import { Address } from "./customer.model.js";

export function displayInformation() {

    const content = document.getElementById('confirmation');
    const customers = JSON.parse(localStorage.getItem(Customer.STORAGE_KEY));
    const address = JSON.parse(localStorage.getItem(Address.STORAGE_KEY));
    const stars = JSON.parse(localStorage.getItem('stars'));

    content.innerHTML = `
<p>Nom : ${customers[0].lastname}</p>
<p>Prénom : ${customers[0].firstname}</p>
<p>Email : ${customers[0].email}</p>
<p>Téléphone : ${customers[0].phone}</p>

<p>Adresse : ${address[0].numStreet} ${address[0].nameStreet} ${address[0].zipCode} ${address[0].city}</p>

<p>Votre commande :</p>
`
    stars.forEach(element => {
        content.innerHTML += `<img src="${element}" alt="">`
    });
};

function deleteStorage() {
    const submitOrder = document.getElementById('submitOrder');

    submitOrder.addEventListener('click', () => {
        localStorage.clear();
        window.location.href = "/thankyou.html";
    })
}

deleteStorage()
