---
title: Lists
---
{{render '@support'}}

Display a single list of items in a quick, scannable format. The UCLA brands dictates that lists are ordered with numbers or bullets in ![#2774AE](https://via.placeholder.com/15/2774AE/000000?text=+) `#2774AE` which is the "$ucla-blue" [variable](/build/%!CurrentVersion%!/docs/colors/layout). Examples can be found [here](/build/%!CurrentVersion%!/components/detail/lists.html).

<h2>Usage</h2>

<h3>Usability Guidance</h3>

* Front-load the first two words of your headlines for [easy eye scanning](https://www.nngroup.com/articles/first-2-words-a-signal-for-scanning/).
* Progressively disclose lists with more than several dozen items with a 'more' link or button.

<h3>Accessibility Requirements</h3>

* Use the `<li>` element for more than text-only lists. It's a critical component in web accessibility. It tells non-sighted users if they're about to browse a few items of content or hundreds. Any list of content such as news articles, calendar events, academic programs, etc. should be wrapped in `<li>` to communicate how many items belong in that list.

<h2>Unordered List</h2>

<h3>Code</h3>

```
{{ render '@lists--unordered-lists' }}
```

<h2>Ordered List</h2>

<h3>Code</h3>

```
{{ render '@lists--ordered-lists' }}
```
