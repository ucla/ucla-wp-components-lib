'use strict';

const { src, series, dest, parallel, watch, task } = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const gulpStylelint = require('gulp-stylelint');
const fractal = require("./fractal");
const eslint = require('gulp-eslint');
const image = require('gulp-image');
const replace = require('gulp-replace');
const merge = require('merge-stream');

sass.compiler = require('node-sass');

/*
 * Configure a Fractal instance.
 *
 * This configuration could also be done in a separate file, provided that this file
 * then imported the configured fractal instance from it to work with in your Gulp tasks.
 * i.e. const fractal = require('./my-fractal-config-file');
 */

const logger = fractal.cli.console; // keep a reference to the fractal CLI console utility

/*
 * Run a static export of the project web UI.
 *
 * This task will report on progress using the 'progress' event emitted by the
 * builder instance, and log any errors to the terminal.
 *
 * The build destination will be the directory specified in the 'builder.dest'
 * configuration option set above.
 */
 // For debugging, make sure gulp is installed
 function defaultTask(cb) {
   cb();
 }

 function generateFaviconLocal() {
    return src('src/favicon.ico')
     .pipe(image())
     .pipe(dest('build'));
 }

 function generateFaviconProd() {
    return src('src/favicon.ico')
     .pipe(image())
     .pipe(dest('build'));
 }

 // watchers

 function watchStyles(done) {
	 watch('src/scss/**/*.scss', series(generateCompLibStylesLocal, lintSassWatch)),
	 watch('src/docs/scss/**/*.scss', series(generateDocStylesLocal, docLintSassWatch));
	 done();
 }

 function watchJavascript(done) {
	 watch('src/js/*.js', series(generateCompLibScriptsLocal, lintJavascriptLib));
   watch('src/docs/js/*.js', series(generateDocScriptsLocal, lintJavascriptDoc));
	 done();
 }

 function lintSassWatch() {
   return src('src/scss/components/**/*.scss')
     .pipe(gulpStylelint({
       reporters: [
         {formatter: 'string', console: true}
       ]
     }));
 }

 function docLintSassWatch() {
   return src('src/docs/**/*.scss')
     .pipe(gulpStylelint({
       reporters: [
         {formatter: 'string', console: true}
       ]
     }));
 }

  // linters

 function lintJavascriptLib() {
      return src('src/js/*.js')
          // eslint() attaches the lint output to the "eslint" property
          // of the file object so it can be used by other modules.
          .pipe(eslint())
          // eslint.format() outputs the lint results to the console.
          // Alternatively use eslint.formatEach() (see Docs).
          .pipe(eslint.format())
          // To have the process exit with an error code (1) on
          // lint error, return the stream and pipe to failAfterError last.
          //.pipe(eslint.failAfterError());
  }

  function lintJavascriptDoc() {
       return src('src/docs/js/*.js')
           // eslint() attaches the lint output to the "eslint" property
           // of the file object so it can be used by other modules.
           .pipe(eslint())
           // eslint.format() outputs the lint results to the console.
           // Alternatively use eslint.formatEach() (see Docs).
           .pipe(eslint.format())
           // To have the process exit with an error code (1) on
           // lint error, return the stream and pipe to failAfterError last.
           //.pipe(eslint.failAfterError());
   }

// component library styles

 function generateCompLibStylesLocal() {
   return src('src/scss/**/*.scss')
	 	 .pipe(sass.sync({outputStyle: 'compressed'}).on("error", sass.logError))
     .pipe(concat('ucla-lib.min.css'))
     .pipe(dest('build/assets/css'))
 }

 function generateCompLibStylesProd() {
   return src('src/scss/**/*.scss')
	 	 .pipe(sass.sync({outputStyle: 'compressed'}).on("error", sass.logError))
     .pipe(concat('ucla-lib.min.css'))
     .pipe(dest('build/css'))
		 .pipe(dest('public/css'));
 }

 // component library scripts

 function generateCompLibScriptsLocal() {
    return src('src/js/**.js')
      .pipe(concat('ucla-lib-scripts.min.js'))
      .pipe(dest('build/assets/js'));
  }

 function generateCompLibScriptsProd() {
   return src('src/js/**.js')
     .pipe(concat('ucla-lib-scripts.min.js'))
     .pipe(dest('build/js'))
     .pipe(dest('public/js'));
 }

// documentation styles

function generateDocStylesLocal() {
  return src('src/docs/scss/**/*.scss')
   .pipe(sass.sync({outputStyle: 'compressed'}).on("error", sass.logError))
   .pipe(concat('global.css'))
   .pipe(dest('build/assets/docs/css'));
}

 function generateDocStylesProd() {
   return src('src/docs/scss/**/*.scss')
    .pipe(sass.sync({outputStyle: 'compressed'}).on("error", sass.logError))
    .pipe(concat('global.css'))
    .pipe(dest('build/docs/css'));
 }

 // documentation scripts

 function generateDocScriptsLocal() {
    return src('src/docs/js/**.js')
      .pipe(concat('scripts.js'))
      .pipe(dest('build/assets/docs/js'));
  }

  function generateDocScriptsProd() {
     return src('src/docs/js/**.js')
       .pipe(concat('scripts.js'))
       .pipe(dest('build/docs/js'));
   }

  // documentation images - filepaths are chosen to ensure
  // images work both in local and prod environments

 function generateDocImagesLocal() {
    return src('src/docs/img/**/*')
     .pipe(image())
     .pipe(dest('build/assets/build/docs/img'));
 }

 function generateDocImagesProd() {
    return src('src/docs/img/**/*')
     .pipe(image())
     .pipe(dest('build/docs/img'));
 }

// component images (i.e icons)

 function generateCompLibImages() {
    return src('src/components/img/**/*')
     .pipe(image())
     .pipe(dest('build/assets/img'));
 }

// Strip/Rebuild Images with %!CurrentVersion%! String filter

// For Local - Remove filter string
 function removeImageSrcFilterLocal() {
   var firstLevelDocs = src('src/docs/*.md')
   .pipe(replace('src="/build/%!CurrentVersion%!/', 'src="/build/'))
   .pipe(dest('src/docs'))
   var secondLevelDocs = src('src/docs/*/*.md')
   .pipe(replace('src="/build/%!CurrentVersion%!/', 'src="/build/'))
   .pipe(dest('src/docs'))
   var thirdLevelDocs = src('src/docs/*/*/*.md')
   .pipe(replace('src="/build/%!CurrentVersion%!/', 'src="/build/'))
   .pipe(dest('src/docs'))
   return merge(firstLevelDocs, secondLevelDocs, thirdLevelDocs)
 }

// For Dev & Prod Environments- Add filter string
 function addImageSrcFilterProd() {
   var firstLevelDocs = src('src/docs/*.md')
   .pipe(replace('src="/build/', 'src="/build/%!CurrentVersion%!/'))
   .pipe(dest('src/docs'))
   var secondLevelDocs = src('src/docs/*/*.md')
   .pipe(replace('src="/build/', 'src="/build/%!CurrentVersion%!/'))
   .pipe(dest('src/docs'))
   var thirdLevelDocs = src('src/docs/*/*/*.md')
   .pipe(replace('src="/build/', 'src="/build/%!CurrentVersion%!/'))
   .pipe(dest('src/docs'))
   return merge(firstLevelDocs, secondLevelDocs, thirdLevelDocs)
 }

//

 /**
  * Fractal tasks
  */

	/*
	 * Start the Fractal server
	 *
	 * In this example we are passing the option 'sync: true' which means that it will
	 * use BrowserSync to watch for changes to the filesystem and refresh the browser automatically.
	 * Obviously this is completely optional!
	 *
	 * This task will also log any errors to the console.
	 */

	function fractalStart() {
	  const server = fractal.web.server({
	    sync: true
	  });
	  server.on("error", err => logger.error(err.message));
	  return server.start().then(() => {
	    logger.success(`Fractal server is now running at ${server.url}`);
	  });
	}

	/*
 * Run a static export of the project web UI.
 *
 * This task will report on progress using the 'progress' event emitted by the
 * builder instance, and log any errors to the terminal.
 *
 * The build destination will be the directory specified in the 'builder.dest'
 * configuration option set above.
 */

 function fractalBuild() {
   const builder = fractal.web.builder();
   builder.on("progress", (completed, total) =>
     logger.update(`Exported ${completed} of ${total} items`, "info")
   );
   builder.on("error", err => logger.error(err.message));
   return builder.build().then(() => {
     logger.success("Fractal build completed!");
   });
 }

// gulp
exports.default = defaultTask

// gulp styleProductionPublic
exports.generateCompLibStylesLocal = generateCompLibStylesLocal;

// gulp fractalBuild
exports.fractalBuild = fractalBuild;

// gulp watch
exports.watch = series(
	fractalStart,
	watchStyles,
	watchJavascript,
  generateCompLibScriptsLocal,
  generateDocScriptsLocal
);

// gulp build
exports.build = series(
	fractalBuild,
	generateCompLibStylesLocal,
  generateCompLibScriptsLocal,
  generateCompLibImages,
  generateDocStylesLocal,
  generateDocScriptsLocal,
  generateDocImagesLocal,
  generateFaviconLocal,
  removeImageSrcFilterLocal
);

// gulp production
exports.production = series(
	fractalBuild,
	generateCompLibStylesProd,
  generateCompLibScriptsProd,
  generateCompLibImages,
  generateDocStylesProd,
  generateDocScriptsProd,
  generateDocImagesProd,
  generateFaviconProd
);

// gulp addImageFilterStrs - used in Production Pipeline
exports.addImageFilterStrs = addImageSrcFilterProd;
