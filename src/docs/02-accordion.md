---
title: Accordion Documentation Page 2
---
Our goal is to make it easier for teams to design and develop great experiences for users across all UCLA applications.

This site is a preview of the Bruin Components source. It's where we develop new features and components and is not always stable. For that reason you should **always** reference the official Bruin Components documentation site at [bruincomponents.ucla.edu](https://bruincomponents.ucla.edu/).

<a href="https://bruincomponents.ucla.edu/" class="create-button">Visit the Bruin Components docs</a>

```javascript
<div class="section-wrapper accordion">

	<h2 class="accordion__title">
		<button id="accordion1id" class="accordion__title-button" type="button" aria-expanded="true" aria-controls="sect1">
			This is the Title
		</button>
	</h2>

	<div id="sect1" role="region" aria-labelledby="accordion1id" class="accordion__content grey-bk">
			This is the content
	</div>

</div>
```
