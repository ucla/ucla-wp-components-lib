---
title: Statistics, Rankings and Factoids
---
{{render '@support'}}

Highlight an important fact, data point or ranking. We have a lot of useful data and information to share with the public, and accomplishments we can tout. Use these highly visual callouts to do it.

<h2>Usage</h2>

<h3>Usability Guidance</h3>

* When using rankings or statistics touts, limit use to three across per section.
* When using factoids, limit use to one per section.
* All three variations are designed to be responsive -- they will stack on mobile.
* Use the `stat-tout--inline` variation class to horizontally align a number and label.
* When grouping multiple touts across a section, wrap all stat touts in a `<div class="stat-set"></div>` container. This handles responsiveness and aligning the touts.
* Provide a source if the data or ranking comes from another program or institution.

<h3>Accessibility Requirements</h3>

* Use the `<aside>` element to denote factoids and statistics as standalone content.
* Use CSS to style italicized copy, instead of using `<em>` or `<i>` HTML tags.

<h2>Factoid</h2>

<h3>Do’s and Don’ts</h3>

<h4>Do’s</h4>

* Do use only one factoid per section of content.
* Do include the `stat-tout--inline` variation class when using a factoid.

<h4>Don’ts</h4>

* Don’t group more than one factoid together.

<h3>Code</h3>

```
{{view '@stat-touts--factoid'}}
```

<h2>Rankings</h2>

<h3>Do’s and Don’ts</h3>

<h4>Do’s</h4>

* Do limit three rankings per section of content.
* Do wrap multiple rankings in a `<div class="stat-set"></div>` container.
* Do include a source if data or ranking comes from another program or institution.

<h4>Don’ts</h4>

* Don’t group more than four rankings in a `div.stat-set` container.

<h3>Code</h3>

```
{{view '@stat-touts--ranking'}}
```

<h2>Statistics</h2>

<h3>Do’s and Don’ts</h3>

<h4>Do’s</h4>

* Do limit three statistics per section of content.
* Do wrap multiple statistics in a `<div class="stat-set"></div>` container.

<h4>Don’ts</h4>

* Don’t group more than four statistics in a `div.stat-set` container.

<h3>Code</h3>

```
{{view '@stat-touts--statistics'}}
```
