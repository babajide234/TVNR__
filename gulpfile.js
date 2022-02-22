const browserSync = require('browser-sync').create();
const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglify');
const cleanCss = require('gulp-clean-css');


function  style(){
    return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error',sass.logError))
    // .pipe(cleanCss({compatibility: '*'}))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server:{
            baseDir:'./'
        }
    });
    gulp.watch('./scss/**/*.scss',style);
    gulp.watch('./**/*.html').on('change',browserSync.reload);
}


exports.style = style;
exports.watch = watch;