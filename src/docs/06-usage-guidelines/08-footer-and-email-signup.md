---
title: Footer and Email Signup
label: 'Footer and Email Signup'
---
{{render '@support'}}

Display your signature, contact information, and links to practical information. Treat the footer as your toolbox. You don't need to include lots of links, but the ones you do include should be utilitarian and helpful.

<h2>Usage</h2>

<h3>Usability Guidance</h3>

* Display your department's physical address and main contact information.
* Include links to essential services and information about your department.
* If displaying more than 5-6 links, divide them into columns with clearly categorized headings.

<h3>Code Guidance</h3>

* Be sure to include the "tabindex='1'" global attribute and value to the global footer's social media links. This will ensure the social media links are focused in the correct order when being tabbed through.

<h3>Accessibility Requirements</h3>

* Include a link to accessibility resources, either in your footer or the global footer for UCLA.
* Use the `<footer>` element to clearly differentiate the container from your main content.
* Use the `<address>` element for your contact information and `<nav>` for any footer menus.

<h2>Department Footer</h2>

<h3>Code</h3>

```
{{view '@footer-and-email-signup--global'}}
```

<h2>Email Signup</h2>

<h3>Code</h3>

```
{{view '@footer-and-email-signup--email'}}
```
