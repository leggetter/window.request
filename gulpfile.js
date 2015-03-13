var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function() {
  gulp.src(['bower_components/fetch/fetch.js', 'src/request.js'])
  .pipe(concat('request.js'))
  .pipe(gulp.dest('dist/'));
});
