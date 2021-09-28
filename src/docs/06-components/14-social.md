---
title: Social
---
<a class="create-button small" href="https://bitbucket.org/uclaucomm/ucla-bruin-components/issues?status=new&status=open">![bitbucket](https://s3.us-west-1.amazonaws.com/webcomponents.ucla.edu/build/%!CurrentVersion%!/docs/img/bitbucket-icon-white.png) Report an Issue</a>
<a class="create-button small" href="https://ucla.slack.com/archives/G01KJ3GJKHS">![Slack](https://s3.us-west-1.amazonaws.com/webcomponents.ucla.edu/build/%!CurrentVersion%!/docs/img/slack-icon-white.png) Join the Slack Discussion</a>

Display links to official social channels or embed related content.

### **Usability Guidance**

Follow best practices in social media content and marketing:

* Only create unique channels if you have a strategy in place to regularly communicate and engage with customers.
* Don't treat social channels like free advertising channels.
* Use social content to provide value to people.

If you don't have enough resources or content to maintain social channels, that's okay. Consider submitting your important content to official UCLA channels instead of investing resources in maintaining your own.

### **Accessibility Requirements**

* Wrap social media icons in the `<nav>` element with ARIA `aria-label="Social"` or `aria-label="@UCLA Social"` to identify links to your channels.

## **Social Post Tiles**

If you embed content from social channels on your website, we recommend displaying it with branded text- or image-based social tiles. Curate posts to match a specific theme such as campus life, research discoveries, etc. versus a hodgepodge of everything. Regularly update featured posts to ensure content stays current.

### **Code**

```
{{ view '@social--links' }}
```
