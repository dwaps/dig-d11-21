class Preferences
{
    constructor()
    {

    }

    static #root = null

    static render = async() =>
    {
        Preferences.#init()
        await Preferences.#injectHTML()
        Preferences.#animation()
    }

    static #init = () =>
    {
        Preferences.#root = document.querySelector('#main')
    }

    static #injectHTML = () =>
    {
        Preferences.#root.innerHTML = `
        <div class="col d-flex justify-content-center">
            <div class="row justify-content-center" >
                <div class="col-6 col-md-4 d-flex justify-content-center cardVP" >
                    <img class="" src="https://cdn3.iconfinder.com/data/icons/animal-58/512/Sheep-Animal-Zoo-Wild_Life-256.png"/>
                </div>
                <div class="col-6 col-md-4 d-flex justify-content-center cardVP" >
                    <img class="" src="https://cdn3.iconfinder.com/data/icons/animal-58/512/Cow-Animal-Zoo-Wild_Life-256.png"/>
                </div>
                <div class="col-6 col-md-4 d-flex justify-content-center cardVP" >
                    <img class="" src="https://cdn3.iconfinder.com/data/icons/animal-58/512/Pig-Animal-Zoo-Wild_Life-256.png"/>
                </div>
                <div class="col-6 col-md-4 d-flex justify-content-center cardVP" >
                    <img class="" src="https://cdn3.iconfinder.com/data/icons/animal-58/512/Swan-Animal-Zoo-Wild_Life-256.png"/>
                </div>
                <div class="col-6 col-md-4 d-flex justify-content-center cardVP" >
                    <img class="" src="https://cdn3.iconfinder.com/data/icons/animal-58/512/Turtle-Animal-Zoo-Wild_Life-256.png"/>
                </div>
                <div class="col-6 col-md-4 d-flex justify-content-center cardVP" >
                    <img class="" src="https://cdn3.iconfinder.com/data/icons/animal-58/512/Panda-Animal-Zoo-Wild_Life-256.png"/>
                </div>
                <div class="col-6 col-md-4 d-flex justify-content-center cardVP" >
                    <img class="" src="https://cdn3.iconfinder.com/data/icons/animal-58/512/Octopus-Animal-Zoo-Wild_Life-256.png"/>
                </div>
                <div class="col-6 col-md-4 d-flex justify-content-center cardVP" >
                    <img class="" src="https://cdn3.iconfinder.com/data/icons/animal-58/512/Lion-Animal-Zoo-Wild_Life-256.png"/>
                </div>
                <div class="col-6 col-md-4 d-flex justify-content-center cardVP" >
                    <img class="" src="https://cdn3.iconfinder.com/data/icons/animal-58/512/Monkey-Animal-Zoo-Wild_Life-256.png"/>
                </div>
                <style class="hover"></style>
            </div>
        </div>
        `
        const cards = document.getElementsByClassName('cardVP')
        const src = localStorage.getItem('stepTwoItemSelected')
        Array.from(cards).forEach(el =>{
            const currentSrc = el.childNodes[1].currentSrc
            if (currentSrc === src) {
                el.classList.add('activated')
            }
        })
    }

    static #animation = () =>
    {
        const cards = document.getElementsByClassName('cardVP')
        const styleDiv = document.getElementsByClassName('hover')
        Array.from(cards).forEach(el =>{
            el.addEventListener('mousemove', (e) =>{
                const pos = [e.offsetX, e.offsetY]
                e.preventDefault()
                // if (e.type === "touchmove") {
                //     pos = [ e.touches[0].clientX, e.touches[0].clientY ];
                // }
                const card = el
                const l = pos[0];
                const t = pos[1];
                const h = card.offsetHeight;
                const w = card.offsetWidth;
                const px = Math.abs(Math.floor(100 / w * l)-100);
                const py = Math.abs(Math.floor(100 / h * t)-100);
                const pa = (50-px)+(50-py);
                // math for gradient / background positions
                const lp = (50+(px - 50)/1.5);
                const tp = (50+(py - 50)/1.5);
                const px_spark = (50+(px - 50)/7);
                const py_spark = (50+(py - 50)/7);
                const p_opc = 20+(Math.abs(pa)*1.5);
                const ty = ((tp - 50)/2) * -1;
                const tx = ((lp - 50)/1.5) * .5;
                // css to apply for active card
                var grad_pos = `background-position: ${lp}% ${tp}%;`
                var sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`
                var opc = `opacity: ${p_opc/100};`
                var tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg)`
                // need to use a <style> tag for psuedo elements
                const style = `.cardVP:hover:before { ${grad_pos} }  /* gradient */ .cardVP:hover:after { ${sprk_pos} ${opc} }   /* sparkles */`
                // set / apply css class and style
                // $cards.removeClass("active");
                card.classList.remove('animated')
                card.setAttribute('style', tf)
                styleDiv[0].innerHTML = style 
                // clearTimeout(x);
            })
            el.addEventListener('mouseout', (e) => {
                // remove css, apply custom animation on end
                const card = el
                styleDiv[0].innerHTML = '' 
                card.removeAttribute('style')
                // x = setTimeout(() => {
                //     card.classList.add('animated')
                // },2500);
            })
            el.addEventListener('click', (e) => {
                const card = el
                Array.from(cards).forEach(el => el.classList.remove('activated'))
                card.classList.add('activated')
                localStorage.setItem('stepTwoItemSelected', card.children[0].currentSrc)
            })
        })
    }
}

export default Preferences