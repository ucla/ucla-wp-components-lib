---
title: Buttons
---
Buttons draw attention to important actions, content or next steps. Button tags, `<button>`, are used for internal pages actions. Links, or `<a>` tags, are used for linking to an external page.

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

### **Code Guidance**
* Be sure to include the minimum parent class "ucla" in the containers for your links. This will allow the element to inherit default link styles.
    * Adding the "campus" classname will allow for grid layout.

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

### **Buttons**

If your button links to another page, use the anchor element.
```
<a class="btn" href=""></a>
<button class="btn"></button>
```

If your button submits a form, use the input element.
```
<input class="btn" type="submit"></input>
```

If your button controls interaction within a page, use the button element with appropriate [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role) roles or states.
```
<button class="btn" aria-pressed="false"></button>
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

### **Code**
```
{{ view '@button--primary' }}
```

## **Secondary Button**



```
{{ view '@button--secondary' }}
```



```
{{ view '@button--tertiary' }}
```



```
{{ view '@button--group' }}
```


### **Code**

```
{{ view '@links--related-links' }}
```

1. Link (required)
2. Container (on hover and active states only)

```
{{ view '@links--inline' }}
```

### **Code**

```
{{ view '@button--pagination' }}
```
