---
title: Alerts
---
{{render '@support'}}

Notify users of an important change or new piece of information.

<h2>Usage</h2>

<h3>Usability Guidance</h3>

* Use alerts to validate steps taken by users or denote a system change.
* Use alerts sparingly. Show one at a time to avoid overwhelming users.
* Be polite and encouraging, and inform users how to respond to or fix a problem.

<h3>Code Guidance</h3>

* Be sure to include the default "alert" classname in addition to a specific "alert" classname. This will allow the element to inherit default alert styles.
* Alerts will take the full width of the container.
* Adding the "inline-block" classname to an alert element will allow for usage of an alert element that only takes the width of the text content of the alert.

<h3>Accessibility Requirements</h3>

* Design alerts to visually contrast with surrounding content.
* Use a high-contrast outline or background color and an icon for high visibility.
* Use the ARIA `role="alert"` to notify assistive technology of time-sensitive information.

<strong>Further Reading</strong>

* [Using the alert role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alert_role) (Mozilla)

<h2>Primary Alert</h2>


<h3>Code</h3>

```
{{view '@alerts--primary'}}
```

<h2>Secondary Alert</h2>

<h3>Code</h3>

```
{{view '@alerts--secondary'}}
```

<h2>Success Alert</h2>

<h3>Code</h3>

```
{{view '@alerts--success'}}
```

<h2>Error Alert</h2>

<h3>Code</h3>

```
{{view '@alerts--error'}}
```

<h2>Warning Alert</h2>

<h3>Code</h3>

```
{{view '@alerts--warning'}}
```
