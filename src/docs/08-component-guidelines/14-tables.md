# **Tables**

## Compactly display complex data in columns and rows

## **Usage**

### **Usability Guidance**

* Left-align table content like text and dates for easy readability.
* Right-align complex numerical and financial data for scale of size.
* Display headings at the top of each column (required).
* Consider whether to define row headings for added emphasis to each line of data (optional).

### **Accessibility Requirements**

* Define different sections of your table both visually and semantically. Use elements like a table header `<thead>`, body `<tbody>`, and footer `<tfoot>`.
* Add further clarification to the table cell by specifying when they contain group headings `<th>` or data `<td>`.

* Further Readling
  * [Reference of table content elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Table_content) (Mozilla)

## **Anatomy**

![Tables Anatomy Image](/docs/img/Table/table-anatomy.jpg)


1. Table Header Row (optional)
2. Table Header Column (optional)
3. Table Cell (required)
4. Subtotal Header (optional)
5. Subtotal Cell (optional)
6. Total Header (optional)
7. Total Cell (optional)


## **Specs**

![Tables Specs Image](/docs/img/Table/table-specs.jpg)  

## **Mobile Behavior**

![Tables Mobile Behavior Image](/docs/img/Table/table-mobilebehavior.jpg)

## **Code**

### **Table Rules & Notices**

1. To align text right, add global class “align-right” to `<th>`/`<td>` element(s).
2. Table heads `<th>` and first column values will be bolded.
3. The text within the rows of “blue-total” and “yellow-total” classes will be bold.
4. Total or distinctive columns (i.e “blue-total” and “yellow-total”) at bottom should be wrapped in tags.

### **Examples of Use**

#### **Simple Table**

```
{{view '@table'}}
```

#### **Table with Aligned-Right Column Data**

The global class “align-right” can be used to right align items.

```
{{view '@table--right'}}
```

#### **Sort Data Table**

Tables can include sorting behavior. Be sure to include [the script](https://ucla-fractal.s3-us-west-1.amazonaws.com/build/docs/installation/download.html) in your project and include the “sortTable” class name to the table class.

```
{{view '@table--sort'}}
```
