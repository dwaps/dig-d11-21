
export class Customer {

    static STORAGE_KEY = "customer";

    constructor(lastname, firstname, email, password, phone) {

        this.lastname = lastname;
        this.firstname = firstname;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }

    save() {
        localStorage.setItem(Customer.STORAGE_KEY, JSON.stringify([this]));
    }

    static hashPassword(pwd) {
        let hashed = [...pwd].map(v => v.charCodeAt(0)).join('');
        hashed = hashed.repeat(20).split('');
        hashed.length = 40;
        return hashed.join('');
    }
}


export class Address {

    static STORAGE_KEY = "address";

    constructor(numStreet, nameStreet, zipCode, city) {

            this.numStreet = numStreet,
            this.nameStreet = nameStreet,
            this.zipCode = zipCode,
            this.city = city
    }

    save() {
        localStorage.setItem(Address.STORAGE_KEY, JSON.stringify([this]));
    }

}