# **Buttons and Links**

## Buttons draw attention to important actions, content or next steps

## **Usage**

### **Usability Guidance**

* Write succinct and specific button text. You can elaborate more with inline text links.
* Begin primary or call-to-action buttons with a verb if you want people to complete a task.
* For longer inline text links, use descriptive language in place of generic links like "[Learn More](https://www.nngroup.com/articles/learn-more-links/)" or "Click Here".
* [Front-load](https://www.nngroup.com/articles/first-2-words-a-signal-for-scanning/) meaningful keywords in longer, tertiary links or text-only buttons.

**Further Reading**
* [Information Scent: How Users Decide Where to Go Next](https://www.nngroup.com/articles/information-scent/) (Nielsen Norman Group)
* [Writing Hyperlinks: Salient, Descriptive, Start with Keyword](https://www.nngroup.com/articles/writing-links/) (Nielsen Norman Group)
* [Learn More Links: You Can Do Better](https://www.nngroup.com/articles/learn-more-links/) (Nielsen Norman Group)

### **Accessibility Requirements**

* Write button labels so they make sense without reading the copy around them so they are accessible to screen readers.
* Don’t write button labels that are generic or not specific to the content being presented.
* Avoid more than one instance of generic text like "Read More". Screen readers can't disambiguate multiple buttons with the same or similar text.
* Do use the button color scheme provided. It is ADA compliant.
* Link headlines in Story Cards or Event Cards rather than adding buttons with generic text.

**Further Reading**
* [ARIA button role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role) (Mozilla)
* [ARIA button role](https://www.w3.org/TR/wai-aria-1.1/#button) (W3)

## **Code**

### **Button Links**

If your button links to another page, use the anchor element.
```
<a href=""></a>
```

If your button submits a form, use the input element.
```
<input type="submit"></input>
```

If your button controls interaction within a page, use the button element with appropriate [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role) roles or states.
```
<button aria-pressed="false"></button>
```

### **Line by Line**

Button wrapper that represents self-contained content.
```
<button class="btn"><button>
```

Span wrapper that represents self-contained content.
```
<span class="btn-span">Button Copy</span>
```

## **Primary Button**

### **Do’s and Don’ts**

#### **Do’s**
* Do use only one primary button per section of content.
* Do group primary buttons with secondary buttons or tertiary buttons.

#### **Don’ts**
* Don’t change the color of buttons or button labels.
* Don’t group more than one primary button together.

### **Anatomy**

<img class="doc-images" alt="Primary Button Anatomy Image" title="Primary Button Anatomy Image" alt="Primary Button Anatomy Image" src="/build/docs/img/Buttons/Primary_Button/primarybtn-anatomy.jpg"/>

1. Button Label (required)
2. Container (required)
3. Leading Icon (optional)
4. Trailing Icon (optional)

### **Interactive States**

<img class="doc-images" alt="Primary Button Interactive States Image" title="Primary Button Interactive States Image" alt="Primary Button Interactive States Image" src="/build/docs/img/Buttons/Primary_Button/primarybtn-states.jpg"/>

### **Specs**

<img class="doc-images" alt="Primary Button Types Specs Image" title="Primary Button Types Specs Image" alt="Primary Button Types Specs Image" src="/build/docs/img/Buttons/Primary_Button/primarybtn-types-specs.jpg"/>

<img class="doc-images" alt="Primary Button Light Background Specs Image" title="Primary Button Light Background Specs Image" alt="Primary Button Light Background Specs Image" src="/build/docs/img/Buttons/Primary_Button/primarybtn-lgtbg-specs.jpg"/>

<img class="doc-images" alt="Primary Button Types Dark Background Specs Image" title="Primary Button Types Dark Background Specs Image" alt="Primary Button Types Dark Background Specs Image" src="/build/docs/img/Buttons/Primary_Button/primarybtn-drkbg-specs.jpg"/>

### **Code**

```
<a href="#" class="btn">Primary Button</a>

<!-- With Icon -->
<a href="#" class="btn icon-btn icon-btn--download">Primary Button</a>﻿

```

## **Secondary Button**

### **Anatomy**

<img class="doc-images" alt="Secondary Button Anatomy Image" title="Secondary Button Anatomy Image" alt="Secondary Button Anatomy Image" src="/build/docs/img/Buttons/Secondary_Button/secondarybtn-anatomy.jpg"/>

1. Button Label (required)
2. Container (required)
3. Leading Icon (optional)
4. Trailing Icon (optional)

### **Interactive States**

<img class="doc-images" alt="Secondary Button Interactive States Image" title="Secondary Button Interactive States Image" alt="Secondary Button Interactive States Image" src="/build/docs/img/Buttons/Secondary_Button/secondarybtn-states.jpg"/>

### **Specs**

<img class="doc-images" alt="Secondary Button States Specs Image" title="Secondary Button States Specs Image" alt="Secondary Button States Specs Image" src="/build/docs/img/Buttons/Secondary_Button/secondarybtn-states-specs.jpg"/>

<img class="doc-images" alt="Secondary Button Variations Specs Image" title="Secondary Button Variations Specs Image" alt="Secondary Button Variations Specs Image" src="/build/docs/img/Buttons/Secondary_Button/secondarybtn-variations-specs.jpg"/>

### **Code**

```
<a href="#" class="btn btn--secondary">Secondary Button</a>

<!-- With Icon -->
<a href="#" class="btn btn--secondary icon-btn icon-btn--internal">Secondary Button</a>
```

## **Tertiary Button**

### **Anatomy**

<img class="doc-images" alt="Tertiary Button Anatomy Image" title="Tertiary Button Anatomy Image" alt="Tertiary Button Anatomy Image" src="/build/docs/img/Buttons/Tertiary_Button/tertiarybtn-anatomy.jpg"/>

1. Button Label (required)
2. Container (required)
3. Leading Icon (optional)
4. Trailing Icon (optional)

### **Interactive States**

<img class="doc-images" alt="Tertiary Button Interactive States Image" title="Tertiary Button Interactive States Image" alt="Tertiary Button Interactive States Image" src="/build/docs/img/Buttons/Tertiary_Button/tertiarybtn-states.jpg"/>

### **Specs**

<img class="doc-images" alt="Tertiary Button States Specs Image" title="Tertiary Button States Specs Image" alt="Tertiary Button States Specs Image" src="/build/docs/img/Buttons/Tertiary_Button/tertiarybtn-states-specs.jpg"/>

<img class="doc-images" alt="Tertiary Button Variations Specs Image" title="Tertiary Button Variations Specs Image" alt="Tertiary Button Variations Specs Image" src="/build/docs/img/Buttons/Tertiary_Button/tertiarybtn-variations-specs.jpg"/>

### **Code**

```
<a href="#" class="btn btn--tertiary">Tertiary Button</a>

<!-- With Icon -->
<a href="#" class="btn btn--tertiary icon-btn icon-btn--play">Tertiary Button</a>﻿
```

## **Button Group**

### **Anatomy**

<img class="doc-images" alt="Button Group Anatomy Image" title="Button Group Anatomy Image" alt="Button Group Anatomy Image" src="/build/docs/img/Buttons/Button_Group/buttongroup-anatomy.jpg"/>

1. Left Button (required)
2. Center Button (optional)
3. Right Button (required)

### **States**

<img class="doc-images" alt="Button Group States Image" title="Button Group States Image" alt="Button Group States Image" src="/build/docs/img/Buttons/Button_Group/buttongroup-states.jpg"/>

### **Specs**

<img class="doc-images" alt="Button Group Specs Image" title="Button Group Specs Image" alt="Button Group Specs Image" src="/build/docs/img/Buttons/Button_Group/buttongroup-specs.jpg"/>

### **Code**

<!--Button Group code here, if applicable-->

## **Related Links**

### **Anatomy**

<img class="doc-images" alt="Related Links Anatomy Image" title="Related Links Anatomy Image" alt="Related Links Anatomy Image" src="/build/docs/img/Buttons/Related_Links/relatedlinks-anatomy.jpg"/>

1. Button Label (required)
2. Icon (optional)
3. Container (required)  

### **States**

<img class="doc-images" alt="Related Links States Image" title="Related Links States Image" alt="Related Links States Image" src="/build/docs/img/Buttons/Related_Links/relatedlinks-states.jpg"/>

### **Specs**

<img class="doc-images" alt="Related Links Specs Image" title="Related Links Specs Image" alt="Related Links Specs Image" src="/build/docs/img/Buttons/Related_Links/relatedlinks-specs.jpg"/>

### **Code**

```
<ul class="list--link-icon ">
    <li><a href="/home" class="icon-link icon-link--internal">This is an Internal Link</a></li>
    <li><a href="http://ucla.edu" class="icon-link icon-link--external">This is an External Link</a></li>
    <li><a href="/sites/all/files/document.pdf" class="icon-link icon-link--download">This is a Link to a Download (pdf)</a></li>
</ul>
```

## **Inline Text Links**

### **Anatomy**

<img class="doc-images" alt="Inline Text Links Anatomy Image" title="Inline Text Links Anatomy Image" alt="Inline Text Links Anatomy Image" src="/build/docs/img/Buttons/Inline_Text_Links/inlinetextlinks-anatomy.jpg"/>

1. Link (required)
2. Container (on hover and active states only)

### **States**

<img class="doc-images" alt="Inline Text Links States Image" title="Inline Text Links States Image" alt="Inline Text Links States Image" src="/build/docs/img/Buttons/Inline_Text_Links/inlinetextlinks-states.jpg"/>

### **Specs**

<img class="doc-images" alt="Inline Text Links Specs Image" title="Inline Text Links Specs Image" alt="Inline Text Links Specs Image" src="/build/docs/img/Buttons/Inline_Text_Links/inlinetextlinks-specs.jpg"/>

### **Color Variations**

<img class="doc-images" alt="Inline Text Variations Image" title="Inline Text Variations Image" alt="Inline Text Variations Image" src="/build/docs/img/Buttons/Inline_Text_Links/inlinetextlinks-colorvariations.jpg"/>

### **Code**

<!--Inline Text Link code here, if applicable-->

## **Pagination**

### **Anatomy**

<img class="doc-images" alt="Pagination Anatomy Image" title="Pagination Anatomy Image" alt="Pagination Anatomy Image" src="/build/docs/img/Buttons/Pagination_Button/pagination-anatomy.jpg"/>

1. Previous Page (required)
2. Current Page Item (required)
3. Page Item (required)
4. Next Page (required)

### **States**

<img class="doc-images" alt="Pagination States Image" title="Pagination States Image" alt="Pagination States Image" src="/build/docs/img/Buttons/Pagination_Button/pagination-states.jpg"/>

### **Variations**

<img class="doc-images" alt="Pagination Variations Image" title="Pagination Variations Image" alt="Pagination Variations Image" src="/build/docs/img/Buttons/Pagination_Button/pagination-variations.jpg"/>

### **Specs**

<img class="doc-images" alt="Pagination Specs Image" title="Pagination Specs Image" alt="Pagination Specs Image" src="/build/docs/img/Buttons/Pagination_Button/pagination-specs.jpg"/>

### **Code**

```
<ul class="pager">
  <li class="pager__item pager__prev"><a href="#">« Prev</a></li>
  <li class="pager__item pager__item--current"><a href="#">1</a></li>
  <li class="pager__item"><a href="#">2</a></li>
  <li class="pager__item"><a href="#">3</a></li>
  <li class="pager__item"><a href="#">4</a></li>
  <li class="pager__item"><a href="#">5</a></li>
  <li class="pager__item"><a href="#">6</a></li>
  <li class="pager__item"><a href="#">7</a></li>
  <li class="pager__item pager__next"><a href="#">» Next</a></li>
</ul>
```
