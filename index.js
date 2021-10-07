const coco = {
  firstname: "Coco",
  lastname: "COCO",
  age: 56,
  isMan: true,
  friends: [ "Jaco", "Fernando", "Franco" ],
  address: {
    street: "Rue de la Liberté",
    zip: "55555",
    city: "Paris"
  },
  presentation() {
    console.log("Je m'appelle " + this.firstname);
  }
};

coco.email = "coco@mail.fr";

const jaco = Object.create(coco);
console.log(jaco);

// coco.presentation();
