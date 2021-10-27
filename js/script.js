// --------------------Slideshow----------------------------

if (window.screen.width >= 550) {
  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}  
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); 
  }
} else {
    let slides = document.getElementsByClassName("mySlides");
    slides[0].style.display = "block";  
}




// --------------------Menu burger----------------------------

const menuBurger = document.querySelector('.menu-burger');
const menuClassic = document.querySelector("menu-classic");

function displayMenuBurger(objetClass, style) {

  const objet = document.querySelector(objetClass);
  style = objet.style.display;

  if (style == 'none')
  objet.style.display = 'block';
  else
  objet.style.display = 'none';

}

menuBurger.addEventListener("click",() => {
  displayMenuBurger(".menu-classic", "none")

})

window.onclick = function(event) {

  if (screen.width < 700) {

    if (!event.target.matches('.menu-burger')) {
      let dropdowns = document.getElementsByClassName("menu-classic");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        displayMenuBurger(".menu-classic", "none")
      }
    }
  }
 
}


