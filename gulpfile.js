'use strict';

const { src, dest, watch, series } = require('gulp');
const concat = require('gulp-concat');
const del = require('del');
const eslint = require('gulp-eslint');
const minify = require('gulp-minify');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');


// Test if Gulp is installed.
function defaultTask (cb) {
  cb();
}


// UCLA Web Component Library CSS stylesheet

function generateCompLibStyles () {
  return src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(concat('ucla-lib.css'))
    .pipe(sourcemaps.write(''))
    .pipe(dest('public/css'));
}

function compressCompLibStyles () {
  return src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(concat('ucla-lib.min.css'))
    .pipe(sourcemaps.write(''))
    .pipe(dest('public/css'));
}

// Fractal Docs CSS stylesheet

function generateDocStyles () {
  return src('src/docs/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(concat('ucla-fractal-theme.css'))
    .pipe(sourcemaps.write(''))
    .pipe(dest('public/css'));
}


// ES Lint Notes
// eslint() attaches output to the "eslint" property to be used by other modules.
// eslint.format() outputs the lint results to the console.
// Alternatively use eslint.formatEach() (see Docs).
// To have the process exit with an error code (1) on
// lint error, return the stream and pipe to failAfterError last use:
// .pipe(eslint.failAfterError());

function watchJavascript (done) {
  watch('src/js/*.js', series(generateCompLibScripts, lintJavascriptLib));
  watch('src/docs/js/*.js', series(generateDocScripts, lintJavascriptDoc));
  done();
}

function lintJavascriptLib () {
  return src('src/js/*.js')
    .pipe(eslint())
    .pipe(eslint.format());
}

function lintJavascriptDoc () {
  return src('src/docs/js/*.js')
    .pipe(eslint())
    .pipe(eslint.format());
}

// UCLA Web Component Library Scripts

function generateCompLibScripts () {
  return src('src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('ucla-lib-scripts.js'))
    .pipe(minify({
      ext: {
        src: '.js',
        min: '.min.js'
      },
    }))
    .pipe(sourcemaps.write(''))
    .pipe(dest('public/js'));
}


// Fractal Docs Scripts

function generateDocScripts () {
  return src(['src/docs/js/**.js'])
    .pipe(concat('ucla-fractal-theme.js'))
    .pipe(minify({
      ext: {
        src: '.js',
        min: '.min.js'
      },
    }))
    .pipe(dest('public/js'));
}

// Clean unnecessary files

function cleanScriptsStyles () {
  return del([
    'public/js/*',
    'public/css/*'
  ]);
}

// gulp
exports.default = defaultTask;

// gulp watch
exports.watch = series(
  watchJavascript,
  cleanScriptsStyles,
  generateCompLibScripts,
  generateDocScripts,
  generateCompLibStyles,
  compressCompLibStyles,
  generateDocStyles
);

// gulp build
exports.build = series(
  cleanScriptsStyles,
  generateCompLibScripts,
  generateDocScripts,
  generateCompLibStyles,
  compressCompLibStyles,
  generateDocStyles
);

// gulp production
exports.production = series(
  cleanScriptsStyles,
  generateCompLibScripts,
  generateDocScripts,
  generateCompLibStyles,
  compressCompLibStyles,
  generateDocStyles
);