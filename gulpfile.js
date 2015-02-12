var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat  = require('gulp-concat');
var uglify = require('gulp-uglify');
var nib = require('nib');
var stylus = require('gulp-stylus');

gulp.task('browserify', [], function () {
  var options = {
    transform: [
      'reactify',
      'envify'
    ],
    standalone: 'page'
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
  gulp.src(['public/css/app.styl'])
    .pipe(stylus({
      compress: (process.env.NODE_ENV == 'production'),
      use: nib()
    }))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('images', function () {
  gulp.src(['public/images/**/*', 'public/images/*'])
    .pipe(gulp.dest('dist/images'));
});

gulp.task('build', ['uglify', 'css', 'images']);

gulp.task('default', ['browserify', 'css', 'images']);

gulp.task('serve', function () {
  gulp.watch('public/**', ['default']);
});
