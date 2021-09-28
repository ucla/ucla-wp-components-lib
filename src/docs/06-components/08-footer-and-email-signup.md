---
title: Foot and Email Signup
---
<a class="create-button small" href="https://bitbucket.org/uclaucomm/ucla-bruin-components/issues?status=new&status=open">![bitbucket](/build/docs/img/bitbucket-icon-white.png) Report an Issue</a>
<a class="create-button small" href="https://ucla.slack.com/archives/G01KJ3GJKHS">![Slack](/build/docs/img/slack-icon-white.png) Join the Slack Discussion</a>

Display your signature, contact information, and links to practical information. Treat the footer as your toolbox. You don't need to include lots of links, but the ones you do include should be utilitarian and helpful.

### **Usability Guidance**

* Display your department's physical address and main contact information.
* Include links to essential services and information about your department.
* If displaying more than 5-6 links, divide them into columns with clearly categorized headings.

### **Code Guidance**

* Be sure to include the "tabindex='1'" global attribute and value to the global footer's social media links. This will ensure the social media links are focused in the correct order when being tabbed through.

### **Accessibility Requirements**

* Include a link to accessibility resources, either in your footer or the global footer for UCLA.
* Use the `<footer>` element to clearly differentiate the container from your main content.
* Use the `<address>` element for your contact information and `<nav>` for any footer menus.

## **Department Footer**

### **Code**

```
{{view '@footer-and-email-signup--global'}}
```

## **Email Signup**

### **Code**

```
{{view '@footer-and-email-signup--email'}}
```
