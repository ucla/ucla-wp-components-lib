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

**Further Readling**
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
<button class="btn"></button>
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

![Primary Button Anatomy Image](/docs/img/Buttons/Primary_Button/primarybtn-anatomy.jpg)

1. Button Label (required)
2. Container (required)
3. Leading Icon (optional)
4. Trailing Icon (optional)

### **Interactive States**

![Primary Button Interactive States Image](/docs/img/Buttons/Primary_Button/primarybtn-states.jpg)

### **Specs**

![Primary Button Types Specs Image](/docs/img/Buttons/Primary_Button/primarybtn-types-specs.jpg)

![Primary Button Light Background Specs Image](/docs/img/Buttons/Primary_Button/primarybtn-specs.jpg)

![Primary Button Types Dark Background Specs Image](/docs/img/Buttons/Primary_Button/primarybtn-types-specs.jpg)

### **Code**
```
{{view '@button--primary'}}
{{view '@button--primary-disabled'}}
{{view '@button--primary-icon'}}
```

## **Secondary Button**

### **Anatomy**

![Secondary Button Anatomy Image](/docs/img/Buttons/Secondary_Button/secondarybtn-anatomy.jpg)

1. Button Label (required)
2. Container (required)
3. Leading Icon (optional)
4. Trailing Icon (optional)

### **Interactive States**

![Secondary Button Interactive States Image](/docs/img/Buttons/Secondary_Button/secondarybtn-states.jpg)

### **Specs**

![Secondary Button States Specs Image](/docs/img/Buttons/Secondary_Button/secondarybtn-states-specs.jpg)

![Secondary Button Variations Specs Image](/docs/img/Buttons/Secondary_Button/secondarybtn-variations-specs.jpg)

### **Code**

```
{{view '@button--secondary'}}
{{view '@button--secondary-disabled'}}
{{view '@button--secondary-icon'}}
```

## **Tertiary Button**

### **Anatomy**

![Tertiary Button Anatomy Image](/docs/img/Buttons/Tertiary_Button/tertiarybtn-anatomy.jpg)

1. Button Label (required)
2. Container (required)
3. Leading Icon (optional)
4. Trailing Icon (optional)

### **Interactive States**

![Tertiary Button Interactive States Image](/docs/img/Buttons/Tertiary_Button/tertiarybtn-states.jpg)

### **Specs**

![Tertiary Button States Specs Image](/docs/img/Buttons/Tertiary_Button/tertiarybtn-specs.jpg)

![Tertiary Button Variations Specs Image](/docs/img/Buttons/Tertiary_Button/tertiarybtn-variations-specs.jpg)

### **Code**

```
{{view '@button--tertiary'}}
{{view '@button--tertiary-disabled'}}
{{view '@button--tertiary-icon'}}
```

## **Button Group**

### **Anatomy**

![Button Group Anatomy Image](/docs/img/Buttons/Button_Group/buttongroup-anatomy.jpg)

1. Left Button (required)
2. Center Button (optional)
3. Right Button (required)

### **States**

![Button Group States Image](/docs/img/Buttons/Button_Group/buttongroup-states.jpg)  

### **Specs**

![Button Group Specs Image](/docs/img/Buttons/Button_Group/buttongroup-specs.jpg)  

### **Code**

```
{{view '@button--group'}}
{{view '@button--group-disabled'}}
```

## **Related Links**

### **Anatomy**

![Related Links Anatomy Image](/docs/img/Buttons/Related_Links/relatedlinks-anatomy.jpg)

1. Button Label (required)
2. Icon (optional)
3. Container (required)  

### **States**

![Related Links States Image](/docs/img/Buttons/Related_Links/relatedlinks-states.jpg)   

### **Specs**

![Related Links Specs Image](/docs/img/Buttons/Related_Links/relatedlinks-specs.jpg)

### **Code**

```
{{view '@links--related-links'}}
```

## **Inline Text Links**

### **Anatomy**

![Inline Text Links Anatomy Image](/docs/img/Buttons/Inline_Text_Links/inlinetextlinks-anatomy.jpg)

1. Link (required)
2. Container (on hover and active states only)


### **States**

![Inline Text Links States Image](/docs/img/Buttons/Inline_Text_Links/inlinetextlinks-states.jpg)    

### **Specs**

![Inline Text Links Specs Image](/docs/img/Buttons/Inline_Text_Links/inlinetextlinks-specs.jpg)   

### **Color Variations**

![Inline Text Links Specs Image](/docs/img/Buttons/Inline_Text_Links/inlinetextlinks-colorvariations.jpg)    

### **Code**

```
{{view '@links'}}
{{view '@links--inline'}}
```

## **Pagination**

### **Anatomy**

![Pagination Anatomy Image](/docs/img/Buttons/Pagination_Button/pagination-anatomy.jpg)

1. Previous Page (required)
2. Current Page Item (required)
3. Page Item (required)
4. Next Page (required)


### **States**

![Pagination States Image](/docs/img/Buttons/Pagination_Button/pagination-states.jpg)

### **Specs**

![Pagination Specs Image](/docs/img/Buttons/Pagination_Button/pagination-specs.jpg)    

### **Variations**

![Pagination Variations Image](/docs/img/Buttons/Pagination_Button/pagination-variations.jpg)     

### ***Code***

```
{{view '@button--pagination'}}
```
