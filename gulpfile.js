var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('default', function () {

    livereload.listen();

    gulp.watch('src/**').on('change', livereload.changed);

});
