var gulp = require('gulp');
var del = require('del');
var cssnano = require('gulp-cssnano');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

gulp.task('clean', function () {
  del(['css/main.css']);
});

gulp.task('sass', function() {
  return gulp.src('sass/main.scss')
    .pipe($.sass({
      includePaths: sassPaths
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
      .pipe(cssnano())
      .pipe(gulp.dest('css'));
});

gulp.task('default', ['clean', 'sass'], function() {
  gulp.watch(['sass/**/*.scss'], ['sass']);
});
