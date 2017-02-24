const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () => {
    return gulp.src('src/*.js')
        .pipe(babel({
            plugins: ['add-module-exports']
        }))
        .pipe(gulp.dest('lib'));
});