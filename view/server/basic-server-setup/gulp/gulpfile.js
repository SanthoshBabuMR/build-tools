// require gulp plugins
var gulp    = require('gulp'),
    connect = require('gulp-connect');

// configure task
gulp.task('connect', function() {
  connect.server({
    port: 62342
  });
});

// register task
gulp.task('startServer', ['connect']);
