---
title: Button Documentation Page
---

This is a example template on how to document your component to the repository guidelines. In this section give brief explanation of what your component is and does.

Our goal is to make it easier for teams to design and develop great experiences for users across all UCLA applications.

```
// Standard Button
{{view '@button'}}
// Standard Button with Icon
{{view '@button--icon'}}
// Gold Button
{{view '@button--gold'}}
// Gold Button with Icon
{{view '@button--gold-icon'}}
```


## Line by Line

I. 	Button wrapper that represents self contained content.
```
<button class="btn">
```

II. 	Span wrapper that represents self contained content.
```
<span class="btn-span">Button Copy</span>
```

### See Example On:

*	[Button](/components/detail/button)

**This site is a preview of the Bruin Components source. It's where we develop new features and components and is not always stable. For that reason you should alway reference the official Bruin Components documentation site at [bruincomponents.ucla.edu](https://bruincomponents.ucla.edu/).**

## Usability Guidance
- Write clear and succinct button text.
- Describe the action or the link destination.
- Try to use specific language in place of generic buttons like "learn more".
- Begin primary or call-to-action buttons with a verb if you want people to complete a task.
- Front-load important keywords in longer, tertiary links or text-only buttons.

## Accessibility Requirements
- Avoid text like "click here" that describes a general interaction.
- Avoid more than one instance of generic text like "read more". Screen readers can't disambiguate multiple buttons with the same or similar text.
- Link headlines in story cards or event cards rather than adding buttons with generic text.

## Further Reading
[ARIA: button role (Mozilla)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role)

[ARIA: button role (w3)](https://www.w3.org/TR/wai-aria-1.1/#button)
