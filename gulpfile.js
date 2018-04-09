const gulp = require('gulp')
const clean = require('gulp-clean')
const pug = require('gulp-pug')

gulp.task('default', ['clean', 'views'])

gulp.task('clean', () => gulp.src('docs/**.*', {force: true}).pipe(clean()))

gulp.task('views', () =>
  gulp.src('views/pages/*.pug')
    .pipe(pug({ }))
    .pipe(gulp.dest('docs'))
)
