const listElements = document.querySelectorAll('.nav-link');
for (let i = 0; i < listElements.length; i++) {
    listElements[i].addEventListener( 'click', function(){
        document.querySelector('.navbar-toggler').classList.add('collapsed');
        document.querySelector('.navbar-collapse').classList.remove('show');        
    });
}

window.onscroll = function() {
    const classListSearched = '.navbar-brand,section h2';
    const classScrolled = 'scrolled';
 
    if(document.documentElement.scrollTop > 100
    && !document.querySelector(classListSearched).classList.contains(classScrolled)){
        const listElements = document.querySelectorAll(classListSearched);
        for (let i = 0; i < listElements.length; i++) {
            listElements[i].classList.add(classScrolled);
        }

    }
    else if(document.documentElement.scrollTop < 5
         && document.querySelector(classListSearched).classList.contains(classScrolled)){
        const listElements = document.querySelectorAll(classListSearched);
        for (let i = 0; i < listElements.length; i++) {
            listElements[i].classList.remove(classScrolled);
        }
    }
};
