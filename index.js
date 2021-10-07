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
  }
};

// DRY --> Don't Repeat Yourself
// KISS --> Keep It Simple Stupid

function sayHello() {
  console.log(arguments[0], arguments[1], " !");
}

function myLog() {
  let str = "";
  for (let arg of arguments) {
    str += arg + " ";
  }
  console.log(str);
}

function userBuilder() {
  console.log("User en cours de création...");
  return "coco";
}

sayHello("Salut", "Coco");
sayHello("Coucou", "Franco");
