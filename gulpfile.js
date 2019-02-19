var gulp = require('gulp');
var cssnano = require('gulp-cssnano');

gulp.task('css-minify', function() {
    return gulp.src('./main.css')
        .pipe(cssnano())
        .pipe(gulp.dest('./out'));
});

  