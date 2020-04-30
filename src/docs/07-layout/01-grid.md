---
title: Grid
---

## The Bruin Grid
This Bruin grid has a max of twelve columns and five breakpoints. It is a boilerplate, fully responsive grid system that is flexible and easy to use.


Viewports | Viewport Width | SCSS Breakpoint Variable
------------ | ------------- | -------------
Extra Small / Mobile Devices | 480px | "xs"
Small / Mobile Devices | 600px | "sm"
Medium / Tablet devices | 768px | "md"
Large / Desktop or laptop devices | 1024px | "lg"
Extra Large / Presentation Mode | 1280px | "xl"


### Breakpoint Examples
```
// CSS Example Breakpoint Usage
@media (min-width: 768px) {
  display: inline-block;
}

// SCSS Example Breakpoint Usage
@media (min-width: breakpoint-min(md)) {
  display: inline-block;
}
```

### Columns

In order to use the column grid you must wrap the page area with the "ucla campus" class.

* The "ucla" class splits the page horizontally.  It will help you break up rows of content or can be used as your main content wrapper.
It has no padding or margins.
* The "campus" class forces the clear of children, a.k.a [the clearfix hack](https://css-tricks.com/snippets/css/clear-fix/). This was used to help support of older browser versions.
* The "col" class divides the row into columns. All columns except the first child have a margin-left of 1.6%.
* the "span_x_of_x" class defines the width of the column using percentages. This allows the grid to be fluid at all breakpoints.


```
// Full Width
{{view '@grid'}}

// Two Colums
{{view '@grid--two'}}

// Three Colums
{{view '@grid--three'}}

// Twelve Columns Responsive EXAMPLE
{{view '@grid--thirteen'}}
```


[MORE EXAMPLES](/components/detail/grid)
