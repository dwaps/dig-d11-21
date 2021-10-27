import { displayInformation } from "./confirmation.js";
import { Address } from "./customer.model.js";


const submitAddress = document.getElementById('submitAddress');


submitAddress.addEventListener("click", () => {

    const numberStreet = document.querySelector("input[name=numberStreet]").value;
    const nameStreet = document.querySelector('input[name=nameStreet]').value;
    const postalCode = document.querySelector('input[name=postalCode]').value;
    const city = document.querySelector('input[name=city]').value;
    
    const addressDelivery = new Address(numberStreet, nameStreet, postalCode, city);
    addressDelivery.save();
    displayInformation();

})

