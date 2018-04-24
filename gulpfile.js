const gulp = require('gulp')
const clean = require('gulp-clean')
const pug = require('gulp-pug')
const sitemap = require('gulp-sitemap')
const articles = require('./views/articles')
const browserSync = require('browser-sync').create()

gulp.task('default', ['clean', 'views', 'rss', 'sitemap'])

gulp.task('clean', () => gulp.src('docs/**.html', {force: true}).pipe(clean()))

gulp.task('views', () =>
  gulp.src('views/pages/*.pug')
    .pipe(pug({data: {articles}}))
    .pipe(gulp.dest('docs'))
)

gulp.task('sitemap', () =>
  gulp.src('docs/**/*.html', {
    read: false
  })
    .pipe(sitemap({
      siteUrl: 'http://gitbit.org'
    }))
    .pipe(gulp.dest('./docs'))
)

gulp.task('rss', () => {
  require('./rss.js')
})

gulp.task('start', function() {
  browserSync.init({
    server: {
      baseDir: './admin'
    }
  })

  gulp.watch('./admin/*').on('change', browserSync.reload)
})
