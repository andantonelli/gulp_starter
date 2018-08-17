'use strict'
const config = require('../config')
const notifyError = require('../lib/notifyError')

const gulp = require('gulp')
const browserSync = require('browser-sync').create()

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: config.src.root
    }
  })
})

gulp.task('watch', ['browserSync', 'style'], function() {
  gulp.watch(config.src.scss, ['style']).on('change', browserSync.reload)
})
