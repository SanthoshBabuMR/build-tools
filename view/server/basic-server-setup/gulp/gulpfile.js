var gulp    = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    port: 62342
  });
});
 
gulp.task('startServer', ['connect']);
