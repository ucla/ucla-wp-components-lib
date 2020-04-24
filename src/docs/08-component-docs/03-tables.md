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
<div class="fixed-table">
  <div class="fixed-table__scroller">
      <table class="fixed-table__wrapper">
          <thead>
              <tr>
                <th class="fixed-table__sticky-col">Column One Title</th>
                <th>Column Two Title</th>
                <th>Column Three Title</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                <td class="fixed-table__sticky-col">First Row Title</td>
                <td>First row second column info.</td>
                <td>First row third column info.</td>
              </tr>
              <tr>
                <td class="fixed-table__sticky-col">Second Row Title</td>
                <td>Second row second column info.</td>
                <td>Second row third column info.</td>
              </tr>
              <tfoot>
                <tr class="blue-total">
                  <td class="fixed-table__sticky-col">Third Row Title - Blue Total Row</td>
                  <td>Third row second column info + Blue Total Row</td>
                  <td>Third row third column info + Blue Total Row</td>
                </tr>
                <tr class="yellow-total">
                  <td class="fixed-table__sticky-col">Total Example - Yellow Total Row</td>
                  <td>99,999 - Yellow Total Row</td>
                  <td>99,999 - Yellow Total Row</td>
                </tr>
              </tfoot>
          </tbody>
      </table>
  </div>
</div>
```
<h3>2. Table with Aligned-Right Column Data</h3>
The global class, "align-right" can be used to right align items.

```
<div class="fixed-table">
  <div class="fixed-table__scroller">
      <table class="fixed-table__wrapper">
          <thead>
              <tr>
                <th class="fixed-table__sticky-col">Column One Title</th>
                <th class="align-right">Column Two Title</th>
                <th class="align-right">Column Three Title</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                <td class="fixed-table__sticky-col">First Row Title</td>
                <td class="align-right">99,999</td>
                <td class="align-right">99,999</td>
              </tr>
              <tr>
                <td class="fixed-table__sticky-col">Second Row Bold Title Example</td>
                <td class="align-right">99,999</td>
                <td class="align-right">99,999</td>
              </tr>
              <tr class="blue-total">
                <td class="fixed-table__sticky-col">Third Row Title</td>
                <td class="align-right">99,999</td>
                <td class="align-right">99,999</td>
              </tr>
              <tfoot>
                <tr class="yellow-total">
                  <td class="fixed-table__sticky-col">Total</td>
                  <td class="align-right">99,999</td>
                  <td class="align-right">99,999</td>
                </tr>
              </tfoot>
          </tbody>
      </table>
  </div>
</div>
```
<h3>3. Table with Sort Data Columns</h3>
Tables can include sorting behavior. Be sure to include <a href="/build/docs/installation/download.html">the script</a> in your project and include the "sortTable" class name to the table class.

```
<div class="fixed-table">
  <div class="fixed-table__scroller">
    <table id="sortTable" class="fixed-table__wrapper">
      <thead>
        <tr>
          <th class="fixed-table__sticky-col sorting-asc" data-sort="lastname" data-sort-onload="yes">Name</th>
          <th data-sort="int">Elected</th>
          <th data-sort="string">Department</th>
        </tr>
      </thead>
      <tr>
        <td class="fixed-table__sticky-col">Name Aa</td>
        <td>1942</td>
        <td>Strategic Communications</td>
      </tr>
      <tr>
        <td class="fixed-table__sticky-col">Name Bb</td>
        <td>1963</td>
        <td>External Affairs</td>
      </tr>
      <tr>
        <td class="fixed-table__sticky-col">Name Cc</td>
        <td>1999</td>
        <td>Human Resources</td>
      </tr>
      <tr>
        <td class="fixed-table__sticky-col">Name Dd</td>
        <td>2001</td>
        <td>Admissions</td>
      </tr>
      <tr>
        <td class="fixed-table__sticky-col">Name Ee</td>
        <td>1910</td>
        <td>Dentistry</td>
      </tr>
      <tr>
        <td class="fixed-table__sticky-col">Name Ff</td>
        <td>2020</td>
        <td>Strategic Communications</td>
      </tr>
    </table>
  </div>
</div>
```
