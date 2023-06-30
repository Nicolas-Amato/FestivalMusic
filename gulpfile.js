// optimisa las funciones de JS

const { src, dest, watch, parallel} = require('gulp');

//css
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

//imagenes
const cachee = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

//javascript

const terser = require('gulp-terser-js')

function css(done) {
    src('src/scss/**/*.scss')//identiuficar el archivo SASS
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass())//compilarlo
    .pipe(postcss([ autoprefixer(), cssnano()]) )
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/css'));  // almacenarla en el disco duro


    done(); //callback que avisa a gulp cuando llegamos al final
}

function imagenes(done){
    const opciones = {
        optimizationLevel: 3
    }
    src('src/img/**/*.{png,jpg}')
     .pipe( cachee( imagemin(opciones) ))
     .pipe( dest('build/img'))
    done();

}



function versionWebp(done) {
    const opciones = {
        quality: 50
    };    
    src('src/img/**/*.{png,jpg}')
    .pipe(webp(opciones))
    .pipe(dest('build/img'))
    done();
}


function versionavif(done) {
    const opciones = {
        quality: 50
    };    
    src('src/img/**/*.{png,jpg}')
    .pipe(avif(opciones))
    .pipe(dest('build/img'))
    done();
}

function javascrits(done){
    src('src/js/**/*js')
    .pipe(dest('build/js'))
    done();
}


function dev(done) {
    watch('src/scss/**/*.scss', css)
    watch('src/js/**/*.js', javascrits)
    done();

}

exports.css = css;
exports.javascrits = javascrits;
exports.imagenes = imagenes
exports.versionWebp = versionWebp;
exports.versionavif = versionavif;
exports.dev = parallel(imagenes,versionWebp,versionavif,javascrits,dev);