var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat  = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('browserify', [], function () {
  var options = {
    transform: [
      'reactify',
      'envify'
    ]
  };
  options.debug = !process.env.NODE_ENV;
  options.verbose = true;

  return gulp.src('public/js/app.js')
    .pipe(browserify(options))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('uglify', ['browserify'], function () {
  return gulp.src('dist/js/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'))
});

gulp.task('build', ['uglify']);

gulp.task('default', ['browserify']);

gulp.task('serve', function () {
  gulp.watch('public/**', ['default']);
});
