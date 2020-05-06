'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();
const mandelbrot = require('@frctl/mandelbrot');
// Status Helper https://github.com/jwir3/fractal-status-helper
const FractalStatusHelper = require('fractal-status-helper')(fractal);

const myCustomisedTheme = mandelbrot({
    skin: "black",
    nav: ["docs", "components"],
    panels: ["html", "info"],
    styles: [
        "default",
        "/docs/css/global.css"
    ],
    scripts: [
       "default",
       "/docs/js/scripts.js"
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

fractal.components.set('default.status', 'freshman');
fractal.docs.set('default.status', 'graduate');
//fractal.docs.set('statuses.ready.label', 'Good to go!');

// fractal.js
fractal.components.set('statuses', {
    //Components
    senior: {
        label: "senior",
        description: "Component is ready for use production websites and applications",
        color: '#00884b'
    },
    junior: {
        label: "junior",
        description: "This compoentent has a branch that is currently being reviewed by the UCLA governance team.",
        color: "#0077C0"
    },
    sophmore: {
        label: "sophmore",
        description: "Component status is “Work In Progress”. This component has been reviewed at least once and there is a branch with notes from the governance team.",
        color: "#812990"
    },
    freshman: {
        label: "freshmen",
        description: "This component has never been submitted for review and no branch exists with notes from the governance team.",
        color: "#E10786"
    },
    deprecated: {
        label: "deprecated",
        description: "This component is is no longer supported in the library and is not encouraged in production websites and applications.",
        color: "#E71C23"
    },
});

fractal.docs.set('statuses', {
  // docs
  professor: {
      label: 'professor',
      description: 'Documentation is ready for referencing.',
      color: '#00884b'
  },
  graduate: {
      label: 'graduate',
      description: 'The related compoenent has reached senior level status and is currently being document for use.',
      color: '#0077C0'
  }
});

// https://github.com/jwir3/fractal-status-helper
fractal.docs.engine(require('@frctl/handlebars')({
    helpers: {
        componentStatuses: FractalStatusHelper.componentStatusTable,
        documentStatuses: FractalStatusHelper.documentStatusTable
    }
}));

const logger = fractal.cli.console; // keep a reference to the fractal CLI console utility
