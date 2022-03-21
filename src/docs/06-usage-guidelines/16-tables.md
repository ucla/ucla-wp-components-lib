---
title: Tables
---
{{render '@support'}}

Compactly display complex data in columns and rows.

<h2>Usage</h2>

<h3>Usability Guidance</h3>

* Left-align table content like text and dates for easy readability.
* Right-align complex numerical and financial data for scale of size.
* Display headings at the top of each column (required).
* Consider whether to define row headings for added emphasis to each line of data (optional).

<h3>Accessibility Requirements</h3>

* Define different sections of your table both visually and semantically. Use elements like a table header `<thead>`, body `<tbody>`, and footer `<tfoot>`.
* Add further clarification to the table cell by specifying when they contain group headings `<th>` or data `<td>`.

<strong>Further Reading</strong>
* [Reference of table content elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) (Mozilla)
* [W3 Tables Tutorial](https://www.w3.org/WAI/tutorials/tables/) (W3C)

<h2>Code</h2>

<h3>Table Rules & Notices</h3>

1. To align text right, add global class “align-right” to `<th>`/`<td>` element(s).
2. Table heads `<th>` and first column values will be bold.
3. The text within the rows of “blue-total” and “yellow-total” classes will be bold.
4. Total or distinctive columns (i.e “blue-total” and “yellow-total”) at bottom should be wrapped in tags.

<h3>Examples of Use</h3>

<h4>Simple Table</h4>

```
{{view '@table--default'}}

```
<h4>Table with Aligned-Right Column Data</h4>
The global class "align-right" can be used to right align items.

```
{{view '@table--right'}}

```

<h4>Sort Data Table</h4>
Tables can include sorting behavior. Be sure to include <a href="/build/%!CurrentVersion%!/docs/installation/download.html">the script</a> in your project and include the "sortTable" class name to the table class.

```
{{view '@table--sort'}}

```
