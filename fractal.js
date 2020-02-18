'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();
const mandelbrot = require('@frctl/mandelbrot');

const myCustomisedTheme = mandelbrot({
    skin: "black",
    nav: ["docs", "components"],
    panels: ["html", "resources", "info"],
    styles: [
        "http://mega-corp.com/css/custom-mandelbrot-stylesheet.css",
        "default",
        "/docs/css/global.css"
    ],
		favicon: "/favicon.ico"
});

// specify a directory to hold the theme override templates
myCustomisedTheme.addLoadPath(__dirname + '/src');

fractal.web.theme(myCustomisedTheme);

/* Set the title of the project */
fractal.set('project.title', 'UCLA Component Library');
fractal.set('project.version', 'v1.0');
fractal.set('project.author', 'Strategic Communications');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/components');

/* Preview template in /src/components/_preview.hbs */
fractal.components.set('default.preview', '@preview');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');

/* Set the static HTML build destination */
fractal.web.set('builder.dest', __dirname + '/build');

/* Specify a directory of static assets */
fractal.web.set('static.path', __dirname + '/public');

fractal.components.set('default.status', 'wip');

const logger = fractal.cli.console; // keep a reference to the fractal CLI console utility
