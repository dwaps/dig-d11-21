class Steps
{

    static #class = "pt-1 pb-1"
    static #style = "background-color:coral; border-radius: 20px;"
    static #styleSelected = "background-color:yellow; border-radius: 20px;"

    static render()
    {
        const step = localStorage.getItem('step')
        const div = document.querySelector('#steps')
        div.innerHTML = `
            <div class="col-2 text-center ${step==0?'stepSelected':'step'} " >
				1
			</div>
			<div class="col-2 text-center ${step==1?'stepSelected':'step'} " >
				2
			</div>
			<div class="col-2 text-center ${step==2?'stepSelected':'step'} " >
				3
			</div>
			<div class="col-2 text-center ${step==3?'stepSelected':'step'}" >
				4
			</div>`
    }    
}

export default Steps