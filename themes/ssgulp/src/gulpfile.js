/**
 * - - - - - - - - - - EDIT YOUR PATHS
 * - - - - - - - - - - - - - - - - - -
 */
const paths = {
  styles: {
    watch   : 'scss/**/*.scss',
    dist    : '../dist/css/'
  },
  scripts: {
    watch   : 'js/**/*.js',
    dist    : '../dist/js/'
  },
  images: {
    watch   : 'img/**/*',
    dist    : '../dist/img/'
  },
  fonts: {
    watch   : 'fonts/**/*',
    dist    : '../dist/fonts/'
  },
  template: {
    watch   : '../templates/**/*.ss',
    dist   : '../templates/**/*.ss'
  },
  code: {
    watch   : '../../../app/src/**/*.php'
  },
  url: {
    dev     : 'http://ssgulp/'
  }
}



/**
 * - - - - - - - - - - INCLUDE YOUR MODULES
 * - - - - - - - - - - - - - - - - - - - - -
 */

const beeper      = require('beeper')
const browserSync = require('browser-sync').create()
const changed     = require('gulp-changed')
const colors      = require('ansi-colors')
const data        = require('gulp-data')
const fse         = require('fs-extra')
const gulp        = require('gulp')
const log         = require('fancy-log')
const normal      = require('node-normalize-scss')
const plumber     = require('gulp-plumber')
const prefix      = require('gulp-autoprefixer')
const sass        = require('gulp-sass')
const sourcemaps  = require('gulp-sourcemaps')
const uglify      = require('gulp-terser')



/**
 * - - - - - - - - - - FUNCTIONS
 * - - - - - - - - - - - - - - -
 */

// Log errors and don't break the stream.
function onError(err) {
  console.log(err)
  beeper(2)
}

// Create a new proxy server to view dist.
function server() {
  browserSync.init ({
      proxy  : paths.url.dev,
      notify : false
  })
  log(colors.redBright.bold.bgWhiteBright("Excelsior! The server is running."))
}

// Compile scss into css and reload proxy server.
// 'production' mode will compress final css output.
function style(env) {
  if (env !== true) {
    return gulp.src(paths.styles.watch)
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: normal.includePaths,
      outputStyle: 'expanded'
    }))
    .pipe(plumber({
        errorHandler : onError
      }))
    .pipe(prefix({
      grid: true,
      flexbox: true
    }))
    .pipe(sourcemaps.write('./')) //maps are set relative to source
    .pipe(gulp.dest(paths.styles.dist))
    .pipe(browserSync.stream())
  } else {
    return gulp.src(paths.styles.watch)
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: normal.includePaths,
      outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./')) //maps are set relative to source
    .pipe(gulp.dest(paths.styles.dist))
  }
}

// Save JavaScript to dist and reload browser.
// 'production' task will uglify final JavaScript output.
function script(env) {
  if (env !== true) {
    return gulp.src(paths.scripts.watch)
    .pipe(plumber({
        errorHandler : onError
      }))
    .pipe(gulp.dest(paths.scripts.dist))
    .pipe(browserSync.stream())
  } else {
    return gulp.src(paths.scripts.watch)
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dist))
  }
}

// Images
function image() {
  return gulp.src(paths.images.watch)
  .pipe(changed(paths.images.dist))
  .pipe(gulp.dest(paths.images.dist))
  .pipe(browserSync.stream())
}

// Fonts
function fonts() {
  return gulp.src(paths.fonts.watch)
  .pipe(changed(paths.fonts.dist))
  .pipe(gulp.dest(paths.fonts.dist))
  .pipe(browserSync.stream())
}


// Watching
function watch() {
  // watch source files
  gulp.watch(paths.scripts.watch, script)
  gulp.watch(paths.styles.watch, style)
  gulp.watch(paths.fonts.watch, fonts)
  gulp.watch(paths.images.watch, image)
  //gulp.watch(paths.code.watch, browserRefresh)
  //gulp.watch(paths.template.watch, browserRefresh)
}










/**
 * - - - - - - - - - - TASKS
 * - - - - - - - - - - - - -
 */

// Render production ready assets
gulp.task('production', function(done) {
  style(true)
  script(true)
  image()
  fonts()
  done()
})

gulp.task('default', function(done) {
  style()
  script()
  image()
  fonts()
  server()
  watch()
  beeper()
  done()
})
