---
title: Tables Documentation
---
## Usability Guidelines

* Left align table content like text and dates for easy readability.
* Right align complex numerical and financial data for scale of size.
* Display headings at the top of each column (required)
* Consider whether to define row headings for added emphasis to each line of data (optional).

## Accessibility Requirements

* Define different sections of your table both visually and semantically. Use elements like a table header <thead>, body <tbody>, and footer <tfoot>.
* Add further clarify to the table cell by specifying when they contain group headings <th> or data <td>.

<h2>Table Rules + Notices:</h2>

1. To align text right, add global class "align-right" to th/td element(s).
2. Table Heads (th) and first column values will be bolded.
3. The text within the rows of "blue-total" and "yellow-total" classes will be bold.
4. Total or distinctive columns (i.e "blue-total" and "yellow-total") at bottom should be wrapped in <tfoot> tags.

<h2>Examples of Use</h2>

<h3>Simple Table</h3>

```
{{view '@table--default'}}

```
<h3>Table with Aligned-Right Column Data</h3>
The global class, "align-right" can be used to right align items.

```
{{view '@table--right'}}

```

<h3>Sort Data Table</h3>
Tables can include sorting behavior. Be sure to include <a href="/build/docs/installation/download.html">the script</a> in your project and include the "sortTable" class name to the table class.

```
{{view '@table--sort'}}

```

## Design Specs. and Anatomy
![Table Anatomy](/build/docs/img/Table/table-anatomy.jpg)
![Table Anatomy](/build/docs/img/Table/table-specs.jpg)


## Further Reading

* [Reference of table content elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
* [Link needed](https://www.w3.org/WAI/tutorials/tables/)
