'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlminify = require("gulp-html-minify");
var browserSync = require('browser-sync').create();
var argv = require('yargs').argv

console.log(argv.passei);

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.sass', ['sass']);
});

gulp.task('build-html' , function(){
    return gulp.src("./*.html")
        .pipe(htmlminify())
        .pipe(gulp.dest("./html"))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./sass/*.sass", ['sass']);

});
