## Getting started

1. Clone respository and run `npm install`
1. Run `gulp build`
1. Run `gulp watch`
1. Navigate to [http://localhost:3000](http://localhost:3000m)

## What Do The Gulp Tasks Do?

| Task | Description |
|-|-|
| build | Build Fractal framework, build expanded styling and scripts for both documentation and components library, and remove string filters (used for production versioning) |
| watch | Start Fractal development web server, watch for styling and script changes for both the documentation and components library, and run linters for both the documentation and components library |
| *production | Build Fractal framework and build compressed styling and scripts for both documentation and components library |
| *addImageFilterStrs | Add filter string for images |

 *used in production builds and should only be used locally to test behaviors expected in production

 - [Go Back to Main README](https://bitbucket.org/uclaucomm/ucla-bruin-components/src/campus/)
