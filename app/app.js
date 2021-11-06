const navBar = document.querySelector(".nav-bar")
const burger = document.querySelector(".burger-nav p")

const applyBgBlur = () => {
    const size = window.innerWidth
    if(size < 993) {
        navBar.classList.add("hidden")
    } else {
        navBar.classList.remove("hidden")
    }
  }

applyBgBlur();
window.addEventListener('resize', applyBgBlur);

burger.addEventListener('click', () => {
    navBar.classList.toggle("hidden")
    }
)