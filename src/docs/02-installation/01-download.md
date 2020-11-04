---
title: Download Components
---
This repository is available for official UCLA websites only. Your domain must be a subdomain of [ucla.edu](https://ucla.edu) and have been created through the 411 domain policy. For more information please reach out to the Strategic Communications department.

### CDN

Put the styles in between the `<head>` tags of every page on your website.

**The Styles**
```
<head>
  // Copy Below
  <link rel="stylesheet" href="https://cdn.webcomponents.ucla.edu/%!CurrentVersion%!/css/ucla-lib.min.css">
  // End Copy
</head>
```

Install the JavaScript in the footer of every page on your website.

**The JavaScript**
```
<footer>
  // Copy Below
  <script type="text/javascript" src="https://cdn.webcomponents.ucla.edu/%!CurrentVersion%!/js/ucla-lib-scripts.min.js"></script>
  // End Copy
</footer>
```

### Zip Download

Manually [download](https://cdn.webcomponents.ucla.edu/%!CurrentVersion%!/ucla-components.zip) styles and script files to include in your project.

### Install via NPM

Run the following command at the root directory of your project:
```
npm install ssh://bitbucket.org/uclaucomm/ucla-bruin-components#main --save
```
