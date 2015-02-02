var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat  = require('gulp-concat');
var uglify = require('gulp-uglify');
var stylus = require('gulp-stylus');

gulp.task('browserify', [], function () {
  var options = {
    transform: [
      'reactify',
      'envify'
    ]
  };
  options.debug = (process.env.NODE_ENV != 'production');
  options.verbose = true;

  return gulp.src('public/js/*.page.js')
    .pipe(browserify(options))
    //.pipe(concat('app.js'))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('uglify', ['browserify'], function () {
  return gulp.src('dist/js/*.page.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'))
});

gulp.task('css', function () {
  gulp.src(['public/css/*.styl', 'public/css/**/*.styl'])
    .pipe(stylus({
      compress: (process.env.NODE_ENV == 'production')
    }))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('build', ['uglify', 'css']);

gulp.task('default', ['browserify', 'css']);

gulp.task('serve', function () {
  gulp.watch('public/**', ['default']);
});
