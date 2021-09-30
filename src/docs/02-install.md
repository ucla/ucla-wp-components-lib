---
title: Download Components
---
<a class="create-button small" href="https://bitbucket.org/uclaucomm/ucla-bruin-components/issues?status=new&status=open">![bitbucket](https://s3.us-west-1.amazonaws.com/webcomponents.ucla.edu/build/%!CurrentVersion%!/docs/img/bitbucket-icon-white.png) Report an Issue</a>
<a class="create-button small" href="https://ucla.slack.com/archives/G01KJ3GJKHS">![Slack](https://s3.us-west-1.amazonaws.com/webcomponents.ucla.edu/build/%!CurrentVersion%!/docs/img/slack-icon-white.png) Join the Slack Discussion</a>

This repository is available for official UCLA websites only. Your domain must be a subdomain of [ucla.edu](https://ucla.edu) and have been created through the [411 domain policy](http://www.adminpolicies.ucla.edu/APP/Number/411.0).

### Install with CDN

CDN is the recommended type of installation.

1. Put the `<link>` reference tag between the `<head>` tags of your website. Replace `%!CurrentVersion%!` version with the version you site in this sites URL.

```
// Copy below
<link rel="stylesheet" href="https://cdn.webcomponents.ucla.edu/%!CurrentVersion%!/css/ucla-lib.min.css">
```
Place in between your sites head tags

```
<head>
// After the opening head tag.
  <link rel="stylesheet" href="https://cdn.webcomponents.ucla.edu/%!CurrentVersion%!/css/ucla-lib.min.css">
// Before the closing head tag.
</head>
```

2. Put the `<script>` reference tag between the `<footer>` tags of your website.

```
// Copy below
<script type="text/javascript" src="https://cdn.webcomponents.ucla.edu/%!CurrentVersion%!/js/ucla-lib-scripts.min.js"></script>
```

Place in between your site footer tags
```
<footer>
  // After the  opening footer tag.
  <script type="text/javascript" src="https://cdn.webcomponents.ucla.edu/%!CurrentVersion%!/js/ucla-lib-scripts.min.js"></script>
  // Before the closing footer tag.
</footer>
```

### Zip Download

Manually [download](https://cdn.webcomponents.ucla.edu/%!CurrentVersion%!/ucla-components.zip) styles and script files to include in your project.
