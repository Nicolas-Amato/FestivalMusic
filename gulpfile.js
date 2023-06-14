// optimisa las funciones de JS

const { src, dest, watch, parallel,} = require('gulp');

//css
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

//imagenes
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

function css(done) {
    src('src/scss/**/*.scss')//identiuficar el archivo SASS
     .pipe(plumber())
     .pipe(sass())//compilarlo
     .pipe(dest('build/css'));  // almacenarla en el disco duro


    done(); //callback que avisa a gulp cuando llegamos al final
}

function imagenes(done){
    const opciones = {
        optimizationLevel: 3
    }  
    src('src/img/**/*.{png,jpg}')
     .pipe(cache(imagemin(opciones)))
     .pipe(dest('build/img'))
    done();

}
function versionWebp(done) {
    const opciones = {
        quality: 50
    };    
    src('src/img/**/*.{png,jpg}')
     .pipe(webp())
     .pipe(dest('build/img'))
    done();
}


function dev(done) {
    watch('src/scss/**/*.scss', css)
    done();

}

exports.css = css;
exports.imagenes= imagenes;
exports.versionWebp = versionWebp;
exports.dev = parallel(imagenes,versionWebp,dev);