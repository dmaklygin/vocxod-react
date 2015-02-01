var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat  = require('gulp-concat');
var package = require('./package.json');

gulp.task('browserify', [], function () {
  var options = package.browserify;
  options.debug = !gulp.env.production;
  options.verbose = true;
  gulp.src(package.main)
    .pipe(browserify(options))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('copy', [], function () {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['browserify', 'copy']);

gulp.task('serve', function () {
  gulp.watch('src/**', ['default']);
});