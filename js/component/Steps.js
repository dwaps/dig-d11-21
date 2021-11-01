class Steps
{

    static #class = "text-align"
    static #style = "background-color:coral;"
    static #styleSelected = "background-color:yellow;"

    static render()
    {
        const step = localStorage.getItem('step')
        const div = document.querySelector('#steps')
        div.innerHTML = `
            <div class="col-2" >
				<div style=${step==0?Steps.#styleSelected:Steps.#style} class=${Steps.#class}>1</div>
			</div>
			<div class="col-2" >
				<div style=${step==1?Steps.#styleSelected:Steps.#style} class=${Steps.#class}>2</div>
			</div>
			<div class="col-2" >
				<div style=${step==2?Steps.#styleSelected:Steps.#style} class=${Steps.#class}>3</div>
			</div>
			<div class="col-2" >
				<div style=${step==3?Steps.#styleSelected:Steps.#style} class=${Steps.#class}>4</div>
			</div>`
    }    
}

export default Steps