var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    concat = require('gulp-concat');

gulp.task('default', function () {

    livereload.listen();

    gulp.watch('src/**').on('change', livereload.changed);

});


gulp.task('build', function () {
    gulp.src(['src/engine/*.js', 'src/game/*.js'])
        .pipe(concat('game.min.js'))
        .pipe(gulp.dest('./'));
});
