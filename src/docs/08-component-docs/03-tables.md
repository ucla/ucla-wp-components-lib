---
title: Tables Documentation
---
Our goal is to make it easier for teams to design and develop great experiences for users across all UCLA applications.

This site is a preview of the Bruin Components source. It's where we develop new features and components and is not always stable. For that reason you should **always** reference the official Bruin Components documentation site at [bruincomponents.ucla.edu](https://bruincomponents.ucla.edu/).

<a href="https://bruincomponents.ucla.edu/" class="create-button">Visit the Bruin Components docs</a>

<h2>Table Rules + Notices:</h2>

1. To align text right, add global class "align-right" to th/td element(s).
2. Table Heads (th) and first column values will be bolded.
3. The text within the rows of "blue-total" and "yellow-total" classes will be bold.
4. Total or distinctive columns (i.e "blue-total" and "yellow-total") at bottom should be wrapped in <tfoot> tags.

<h2>3 Examples of Usage</h2>
<h3>1. Table</h3>

```
{{view '@table--default'}}

```
<h3>2. Table with Aligned-Right Column Data</h3>
The global class, "align-right" can be used to right align items.

```
{{view '@table--right'}}

```

<h3>3. Table with Sort Data Columns</h3>
Tables can include sorting behavior. Be sure to include <a href="/build/docs/installation/download.html">the script</a> in your project and include the "sortTable" class name to the table class.

```
{{view '@table--sort'}}

```
