document.addEventListener('DOMContentLoaded', function(){
    IniciarApp();
});

function IniciarApp(){
    creargaleria();
}

function creargaleria(){
    const galeria = document.querySelector('galeria-fotos')
    galeria.textContent = 'iniciando galeria'
}