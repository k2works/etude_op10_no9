const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () => {
    return gulp.src('src/*.js')
        .pipe(babel({
            plugins: ['add-module-exports']
        }))
        .pipe(gulp.dest('lib'));
});

var mocha = require('gulp-mocha');

gulp.task('test', function() {
  return gulp.src(['test/*_test.js'], {read: false})
    .pipe(mocha({ reporter: 'spec'}))
});

gulp.task('default', ['test']);
