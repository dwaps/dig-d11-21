/////declaration et identification des const avec le dom////

const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

////defilement des formulaire choix et recapitulatif incrementation et validation/////

nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-23%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function(){
    alert("Your Form Successfully Signed up");
    location.reload();
  },800);
});

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});


let formulaire1_storage=JSON.parse(localStorage.getItem("formuliare1"))

//// evenement au btn next */
nextBtnFirst.addEventListener('click',(e)=>{

  // const formulaireUser={
  //   firstname:document.querySelector("#firstname").value,
  //   lastname:document.querySelector("#lastname").value,
  //   email:document.querySelector("#email").value,
  //   password:document.querySelector("#password"),
  //   cpass:document.querySelector("#cpass").value
  // }
  // localStorage.setItem("formulaireUser",JSON.stringify(formulaireUser));
  let pwd=document.querySelector("#password").value
  let pwdconfirm=document.querySelector("#cpass").value

  function hasedpassword (){
    let hashed = [...pwd].map(v => v.charCodeAt(0)).join('');
    hashed = hashed.repeat(20).split('');
    hashed.length = 40;
    console.log(hashed);
    return hashed.join('');
  }

  
  ////mise des donne dans le local storage////
   localStorage.setItem("firstname",document.querySelector("#firstname").value);
   localStorage.setItem("lastname",document.querySelector("#lastname").value);
   localStorage.setItem("email",document.querySelector("#email").value);
   localStorage.setItem("password",hasedpassword(pwd));
   localStorage.setItem("cpass",hasedpassword(pwdconfirm));
  
  ///recuperation donnee local storage et implementation dans le dom////
  document.querySelector("#name").innerHTML=localStorage.getItem("firstname");
  document.querySelector("#prenom").innerHTML=localStorage.getItem("lastname");
  document.querySelector("#mail").innerHTML=localStorage.getItem("email");
})

///recuperation choix de categorie de l utilisateur////
nextBtnSec.addEventListener('click',()=>{
  let categ=document.querySelectorAll("input[name='categorie']");
 
  for(i=0;i<categ.length;i++){
    if(categ[i].checked===true){
      choisecategorie=categ[i].value;

      console.log(choisecategorie)
      localStorage.setItem("categorie",choisecategorie);
      // document.querySelector("#catego").innerHTML=localStorage.getItem("choisecategorie");
    }
  }
 document.querySelector("#catego").innerHTML=localStorage.getItem("categorie");
})

//recuperation donne geolocalisation et identiter /////
nextBtnThird.addEventListener('click',()=>{
  localStorage.setItem("FistNameAdress",document.querySelector("#FistNameAdress").value);
  localStorage.setItem("LastNameAdress",document.querySelector("#LastNameAdress").value);
  localStorage.setItem("localisation",document.querySelector("#localisation").value);
  localStorage.setItem("mobile",document.querySelector("#mobile").value);
  
//   const formulaire2={
//    firstname:localStorage.getItem("FistNameAdress"),
//    lastname:localStorage.getItem("LastNameAdress"),
//    localisation:localStorage.getItem("localisation"),
//    mobile:localStorage.getItem("mobile"),
//  }
 document.querySelector('#nameadress').innerHTML=localStorage.getItem("FistNameAdress")
 document.querySelector('#prenomadress').innerHTML=localStorage.getItem("LastNameAdress")
 document.querySelector('#adresse').innerHTML=localStorage.getItem("localisation")
 document.querySelector('#tel').innerHTML=localStorage.getItem("mobile")
})

// 
// nextBtnFirst.addEventListener('click',(e)=>{
//   e.preventDefault();
  
//   class Formulaire1 {
//     constructor (firstname,lastname,email,password,cpass){
      
//       this.firstname= document.querySelector("#firstname").value;
//       this.lastname= document.querySelector("#lastname").value;
//       this.email = document.querySelector("#email").value;
//       this.password = document.querySelector("#password").value;
//       this.cpass = document.querySelector("#cpass").value;
      
      
//     }
//   }
// }

// const formulaire1=new formulaire1()
// console.log(formulaireValues);
// localStorage.setItem("fomulaireValues",JSON.stringify(formulaireValues));


  
// }

submitBtn.addEventListener('click',(e)=>{

  alert ("validation de votre identiter/localisation  et choix de la categorie")
})



