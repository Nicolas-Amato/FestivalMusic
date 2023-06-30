document.addEventListener('DOMContentLoaded', function(){
    IniciarApp();
});

function IniciarApp(){
    fijandobarra();
    creargaleria();
    Scrollnav();
}

function fijandobarra(){
    const barra = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');
    const body = document.querySelector('body');
    
    window.addEventListener('scroll', function(){
        if(sobreFestival.getBoundingClientRect().top < 0 ){
            barra.classList.add('fija');
            body.classList.add('body-fija');
        } else {
            barra.classList.remove('fija');
            body.classList.remove('body-fija');
        }
    })
}

function Scrollnav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a');
    enlaces.forEach( enlace => {
        enlace.addEventListener('click', function(e){
            e.preventDefault();
            
            const seccionScrol = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScrol);
            seccion.scrollIntoView({ behavior: 'smooth'});
        });
    });

}

function creargaleria(){
    const galeria = document.querySelector('.galeria-fotos')
    for(let i = 1; i <= 12; i++){
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
        <source srcset="build/img/thumb/${i}.avif" type="imagen/avif">
        <source srcset="build/img/thumb/${i}.webp" type="imagen/webp">
        <img loading='lazy' width='200' height='300' src="build/img/thumb/${i}.jpg" alt="imagen galeria">
        `;
        imagen.onclick = function(){
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
    }
}

function mostrarImagen(id){
    const imagen = document.createElement('picture');
        imagen.innerHTML = `
        <source srcset="build/img/grande/${id}.avif" type="imagen/avif">
        <source srcset="build/img/grande/${id}.webp" type="imagen/webp">
        <img loading='lazy' width='200' height='300' src="build/img/grande/${id}.jpg" alt="imagen galeria">
        `;

    const overley = document.createElement('div');
    overley.appendChild(imagen);
    overley.classList.add('overley');

//boton para cerrar el modulo//

    const cerrarimg = document.createElement('P');

    cerrarimg.textContent = 'X';

    cerrarimg.classList.add('cerrarimg');

    cerrarimg.onclick = function(){
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overley.remove();
    };

    overley.appendChild(cerrarimg);

//agregarlo al HTML//
    const body = document.querySelector('body');
    body.appendChild(overley);
    body.classList.add('fijar-body');
}