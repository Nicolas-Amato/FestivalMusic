document.addEventListener('DOMContentLoaded', function(){
    IniciarApp();
});

function IniciarApp(){
    creargaleria();
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

    const cerrarimg = document.createElement('P');
    cerrarimg.textContent = 'X';
    cerrarimg.classList.add('cerrarimg');
    cerrarimg.onclick = function(){
        overley.remove();
    }
    overley.appendChild(cerrarimg);


    const body = document.querySelector('body');
    body.appendChild(overley);
    

}