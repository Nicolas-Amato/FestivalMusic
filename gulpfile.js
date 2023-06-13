// optimisa las funciones de JS

const { src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');


function css(done) {
    src('src/scss/**/*.scss')//identiuficar el archivo SASS
    .pipe(plumber())
    .pipe(sass())//compilarlo
    .pipe(dest('build/css'));  // almacenarla en el disco duro


    done(); //callback que avisa a gulp cuando llegamos al final
}
function dev(done) {
    watch('src/scss/**/*.scss', css)
    done();

}

exports.css = css;
exports.dev = dev;
