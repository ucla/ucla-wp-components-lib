'use strict';

const { src, series, dest, parallel, watch, task } = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const gulpStylelint = require('gulp-stylelint');
const fractal = require("./fractal");
const eslint = require('gulp-eslint');
const image = require('gulp-image');

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

 function styles() {
 	return src('src/scss/**/*.scss')
 		.pipe(sass.sync({outputStyle: 'expanded'}).on("error", sass.logError))
 		.pipe(dest('public/css'));
 }

 function docStyles() {
 	return src('src/docs/**/*.scss')
 		.pipe(sass.sync({outputStyle: 'expanded'}).on("error", sass.logError))
 		.pipe(dest('build/docs'));
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

 function stylesProductionPublic() {
   return src('src/scss/**/*.scss')
	 	 .pipe(sass.sync({outputStyle: 'compressed'}).on("error", sass.logError))
		 .pipe(dest('public/css'));
 }

 function docStylesProduction() {
   return src('src/docs/scss/**/*.scss')
    .pipe(sass.sync({outputStyle: 'compressed'}).on("error", sass.logError))
    .pipe(dest('public/docs/css'));
 }

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

 function watchStyles(done) {
	 watch('src/scss/**/*.scss', series(styles, lintSassWatch)),
	 watch('src/docs/scss/**/*.scss', series(docStyles, docLintSassWatch));
	 done();
 }

 function watchJavascript(done) {
	 watch('src/js/*.js', series(lintJavascriptLib));
   watch('src/docs/js/*.js', series(lintJavascriptDoc));
	 done();
 }

function concatJsLibPublic() {
   return src('src/js/**.js')
     .pipe(concat('scripts.js'))
     .pipe(dest('public/js'));
 }

 function concatJsDoc() {
    return src('src/docs/js/**.js')
      .pipe(concat('scripts.js'))
      .pipe(dest('public/docs/js'));
  }

 function concatImageDoc() {
    return src('src/docs/img/**/*')
     .pipe(image())
     .pipe(dest('build/img'));
 }

 function concatFavicon() {
    return src('src/favicon.ico')
     .pipe(image())
     .pipe(dest('public'));
 }

 function concatImagePublic() {
    return src('src/components/img/**/*')
     .pipe(image())
     .pipe(dest('public/img'));
 }
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




exports.stylesProductionPublic = stylesProductionPublic;

exports.watch = watchStyles;

exports.styles = series(
  styles,
  docStyles
);

exports.fractalStart = series(
	fractalStart,
	watchStyles,
	watchJavascript,
  concatJsLibPublic,
  concatJsDoc
);

exports.fractalBuild = fractalBuild;

exports.default = series(
	fractalBuild,
	styles,
  concatJsLibPublic,
  concatJsDoc
);

exports.build = series(
	fractalBuild,
	styles,
	docStyles,
  concatJsLibPublic,
  concatJsDoc,
  concatImageDoc,
  concatImagePublic,
  concatFavicon
);

exports.production = series(
	fractalBuild,
	stylesProductionPublic,
  docStylesProduction,
  concatJsLibPublic,
  concatJsDoc,
  concatImageDoc,
  concatImagePublic,
  concatFavicon
);
