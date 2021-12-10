# UCLA Web Components Library

Welcome to the UCLA Web Component Library.

The digital application of UCLA’s brand can be found here. We’ve developed a library of components, along with thoughtfully articulated guidelines, documentation, and code to assist campus partners in designing and developing robust and accessible experiences across all UCLA websites and applications.

Our goal is to provide flexible resources and tools for any person or team who contributes to UCLA’s diverse and substantial digital infrastructure.

---

## For Developers
- [Get Local Environment Setup](./help/developers/getSetup.md)
- [Learn How To Contribute](./help/developers/howToContribute.md)
- [Project Directory Hierarchy](./help/developers/projectHierarchy.md)
- [Using BEM Naming Convention](./help/developers/namingConvention.md)

### Toolset

- [Fractal Documentation](https://fractal.build/guide/documentation/)
- [Gulp](https://gulpjs.com/docs/en/getting-started/quick-start/)
- [Stylelint](https://stylelint.io)

--- 

## For Designers

- [Brand Guidelines](https://brand.ucla.edu)
- [Design Files](./help/designers/artifacts.md)


---

## For Consumers
- [How To Navigate the Website](./help/consumers/navigatingSite.md)
- [Components Status](./help/consumers/componentStatus.md)
- [Component Design, Code Documentation and Example Usage (Website)](https://webcomponents.ucla.edu/)
- [How To Include Library in Your Web Project (Website)](https://webcomponents.ucla.edu/build/1.0.0-beta.7/docs/installation/download.html)

---

### Have questions on how to consume or contribute to this library? Please reach out to one of our developers:
- [Post an Issue](https://bitbucket.org/uclaucomm/ucla-bruin-components/issues?status=new&status=open)
- [Join the Slack Discussion](https://ucla.slack.com/archives/G01KJ3GJKHS)
- [Internal Project Maintainers](./help/internal/tableofcontents.md)

---

## Notes

**Maintained By:** A campus community of designers and developers

**Built with:** [Fractal Component Library](https://fractal.build/)

**Created by:** Strategic Communications


## File tree

```
├── CHANGELOG.md
├── README.md
├── bitbucket-pipelines.yml
├── build
│   ├── apple-touch-icon-precomposed.png
│   ├── apple-touch-icon.png
│   ├── assets.html
│   ├── components
│   │   ├── detail
│   │   ├── preview
│   │   └── render
│   ├── components.html
│   ├── css
│   │   ├── ucla-fractal-theme.css
│   │   ├── ucla-fractal-theme.css.map
│   │   ├── ucla-lib.css
│   │   ├── ucla-lib.css.map
│   │   ├── ucla-lib.min.css
│   │   └── ucla-lib.min.css.map
│   ├── docs
│   │   ├── contribute
│   │   ├── contribute.html
│   │   ├── install.html
│   │   ├── layout
│   │   ├── roadmap.html
│   │   ├── support.html
│   │   ├── usage-guidelines
│   │   └── utilities
│   ├── docs.html
│   ├── favicon.ico
│   ├── icons
│   │   ├── denotive
│   │   ├── social
│   │   ├── ucla-web-icons.zip
│   │   └── weather
│   ├── img
│   │   ├── docs
│   │   ├── example-post.jpg
│   │   └── examples
│   ├── index.html
│   ├── js
│   │   ├── ucla-fractal-theme.js
│   │   ├── ucla-fractal-theme.min.js
│   │   ├── ucla-lib-scripts.js
│   │   ├── ucla-lib-scripts.js.map
│   │   ├── ucla-lib-scripts.min.js
│   │   └── ucla-lib-scripts.min.js.map
│   └── themes
│       └── mandelbrot
├── createcommit.js
├── fractal.config.js
├── gulpfile.js
├── help
│   ├── consumers
│   │   ├── componentStatus.md
│   │   └── navigatingSite.md
│   ├── designers
│   │   └── artifacts.md
│   ├── developers
│   │   ├── getSetup.md
│   │   ├── howToContribute.md
│   │   ├── namingConvention.md
│   │   └── projectHierarchy.md
│   ├── images
│   │   └── dependency-versions.png
│   └── internal
│       ├── branchingModel.md
│       ├── bucketCloudSetup.md
│       ├── contributingFlow.md
│       ├── semanticReleaseFlow.md
│       └── tableofcontents.md
├── lastcommit.txt
├── package-lock.json
├── package.json
├── public
│   ├── apple-touch-icon-precomposed.png
│   ├── apple-touch-icon.png
│   ├── css
│   │   ├── ucla-fractal-theme.css
│   │   ├── ucla-fractal-theme.css.map
│   │   ├── ucla-lib.css
│   │   ├── ucla-lib.css.map
│   │   ├── ucla-lib.min.css
│   │   └── ucla-lib.min.css.map
│   ├── favicon.ico
│   ├── icons
│   │   ├── denotive
│   │   ├── social
│   │   ├── ucla-web-icons.zip
│   │   └── weather
│   ├── img
│   │   ├── docs
│   │   ├── example-post.jpg
│   │   └── examples
│   └── js
│       ├── ucla-fractal-theme.js
│       ├── ucla-fractal-theme.min.js
│       ├── ucla-lib-scripts.js
│       ├── ucla-lib-scripts.js.map
│       ├── ucla-lib-scripts.min.js
│       └── ucla-lib-scripts.min.js.map
├── src
│   ├── components
│   │   ├── 01-layout
│   │   ├── 02-utilities
│   │   ├── 03-components
│   │   ├── 98-support
│   │   ├── 99-template
│   │   └── _preview.hbs
│   ├── docs
│   │   ├── 01-index.md
│   │   ├── 02-install.md
│   │   ├── 03-roadmap.md
│   │   ├── 04-layout
│   │   ├── 05-utilities
│   │   ├── 06-usage-guidelines
│   │   ├── 07-contribute
│   │   ├── 08-support.md
│   │   ├── docs.config.json
│   │   ├── index.config.json
│   │   ├── install.config.json
│   │   ├── js
│   │   ├── roadmap.config.json
│   │   ├── scss
│   │   └── support.config.json
│   ├── icons
│   │   ├── denotive
│   │   ├── social
│   │   └── weather
│   ├── js
│   │   ├── accordion.js
│   │   ├── carousel.js
│   │   ├── form.js
│   │   ├── grid.js
│   │   ├── primary-nav.js
│   │   ├── ribbon.js
│   │   ├── table.js
│   │   └── tabs.js
│   └── scss
│       ├── components
│       ├── ucla-lib.scss
│       └── utilities
├── svgo.config.js
└── test-commit
```