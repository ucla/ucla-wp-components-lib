---
title: Buttons
---
{{render '@support'}}

Buttons draw attention to important actions, content or next steps. Button tags, `<button>`, are used for internal page actions. Links, or `<a>` tags, are used for linking to an external page.

<h2>Usage</h2>
<div class="tabs">
    <!-- .tablist is the container for tabs only -->
    <div role="tablist" aria-label="content-tabs">
        <button role="tab" aria-selected="true" aria-controls="panel-01-tab" id="panel-01" class="btn tablinks">
            Usability Guidance
        </button>
        <button role="tab" aria-selected="false" aria-controls="panel-02-tab" id="panel-02" class="btn tablinks" tabindex="-1">
            Accessibility Requirements
        </button>
    </div>
    <!-- .tabcontent contain panels of content -->
    <div tabindex="0" role="tabpanel" id="panel-01-tab" aria-labelledby="panel-01" class="tabcontent">
<br/>

* Write succinct and specific button text. You can elaborate more with inline text links.
* Begin primary or call-to-action buttons with a verb if you want people to complete a task.
* For longer inline text links, use descriptive language in place of generic links like "[Learn More](https://www.nngroup.com/articles/learn-more-links/)" or "Click Here".
* [Front-load](https://www.nngroup.com/articles/first-2-words-a-signal-for-scanning/) meaningful keywords in longer, tertiary links or text-only buttons.
<br/><br/>

<strong>Further Reading</strong>

* [Information Scent: How Users Decide Where to Go Next](https://www.nngroup.com/articles/information-scent/) (Nielsen Norman Group)
* [Writing Hyperlinks: Salient, Descriptive, Start with Keyword](https://www.nngroup.com/articles/writing-links/) (Nielsen Norman Group)
* [Learn More Links: You Can Do Better](https://www.nngroup.com/articles/learn-more-links/) (Nielsen Norman Group)
    </div>
    <div tabindex="0" role="tabpanel" id="panel-02-tab" aria-labelledby="panel-02" hidden="" class="tabcontent">
<br/>

* Write button labels so they make sense without reading the copy around them so they are accessible to screen readers.
* Don’t write button labels that are generic or not specific to the content being presented.
* Avoid more than one instance of generic text like "Read More". Screen readers can't disambiguate multiple buttons with the same or similar text.
* Do use the button color scheme provided. It is ADA compliant.
* Link headlines in Story Cards or Event Cards rather than adding buttons with generic text.
<br/><br/>

<h3>Code Guidance</h3>

* Be sure to include the minimum parent class "ucla" in the containers for your links. This will allow the element to inherit default link styles.
* Adding the "campus" classname will allow for grid layout.
<br/><br/>

<strong>Further Reading</strong>
* [ARIA button role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role) (Mozilla)
* [ARIA button role](https://www.w3.org/TR/wai-aria-1.1/#button) (W3)
    </div>
</div>

<h2>Code</h2>

<h3>Buttons</h3>

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

<h2>Primary Button</h2>

<h3>Do’s and Don’ts</h3>

<h4>Do’s</h4>

* Do use only one primary button per section of content.
* Do group primary buttons with secondary buttons or tertiary buttons.

<h4>Don’ts</h4>

* Don’t change the color of buttons or button labels.
* Don’t group more than one primary button together.

<h3>Anatomy</h3>

<h3>Code</h3>

```
{{ render '@button--primary' }}
```

<h2>Secondary Button</h2>

<h3>Code</h3>

```
{{ render '@button--secondary' }}
```

<h2>Tertiary Button</h2>
<h3>Code</h3>

```
{{ render '@button--tertiary' }}
```

<h2>Button Group</h2>
<h3>Code</h3>

```
{{ render '@button--group' }}
```


<h2>Links</h2>
<h3>Code</h3>

```
{{ render '@links--related-links' }}
```

1. Link (required)
2. Container (on hover and active states only)

```
{{ render '@links--inline' }}
```

<h2>Pagination Button</h2>
<h3>Code</h3>

```
{{ render '@button--pagination' }}
```
