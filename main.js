const enlaces = document.querySelectorAll ('navbar-nav a');
enlaces.forEach((elemento) =>{
    elemento.addEventListener('click',(evento) => {
        evento.preventDefault();
        console.log(evento.target);
    });
});