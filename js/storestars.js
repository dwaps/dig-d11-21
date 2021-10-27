const stars = document.querySelectorAll(".container-stars > img");
const submitStars = document.getElementById('submitStars');
const starsSelected = document.getElementsByClassName('select-star');
const KEY_STORAGE = "stars"

function selectStars() {
    stars.forEach((star => {
        star.addEventListener("click", (e) => {
            e.target.classList.toggle("select-star");
        });
    }));
}
selectStars();


 function saveStars() {
    submitStars.addEventListener("click", (e) => {
        let array = [];
        for (let i = 0; i < starsSelected.length; i++) {
            let result = starsSelected[i].getAttribute("src");
            array.push(result);
        }
        localStorage.setItem(KEY_STORAGE, JSON.stringify(array));
    })
 }
 saveStars();



