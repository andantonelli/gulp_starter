'use strict'
const config = require('../config')
const notifyError = require('../lib/notifyError')

const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()

gulp.task('style', function() {
  gulp.src(config.src.scss)
    .pipe(sass())
    .pipe(gulp.dest(config.dest.css))
    .pipe(browserSync.stream())
})
