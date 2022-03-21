---
title: Spacing
---
{{render '@support'}}

We use an 8-point grid to define our spacing, meaning we use multiples of 8, from 4 to 80. We define dimensions, padding and margins of both block and inline elements. Individual elements are positioned relative to each other. Smaller components, such as iconography and typography, can align to a 4-point grid.

<h3>Spacing Class Structure</h3>

We created responsive margin and padding classes that use the following shorthand for values. These classes are built from a default Sass map in multiples of 8, ranging from 4 to 80, and support divs, paragraphs, and HTML5 elements.

Use this format: `<p class="{property}{sides}-{breakpoint variable}-{size}">`

<h3>Class Values</h3>
Property | Sides | Breakpoint Variable | Size
------------ | ------------- | ------------- | -------------
"m" = Margin | "t" = Top | "xs" | "4" = 4px
"p" = Padding | "r" = Right | "sm" |  "8" = 8px
 | "b" = Bottom | "md" |  "12" = 12px
 | "l" = Left | "lg" |  "16" = 16px
 | "x" = set both *-left and *-right | "xs" | "24" = 24px
 | "y" = set both *-top and *-bottom | | "32" = 32px
 | | | "64" = 64px
 | | | "80" = 80px

<h3>Class Examples</h3>
 Class Example | Spacing Size
 ------------ | -------------
 "mb-4" | {Margin}{Bottom}, All Screens, {4px}
 "ml-xl-4" | {Margin}{Left}, {Extra Large Screens Only}, {4px} <br/><small>0 Margin on All Smaller Screens.</small>
 "pr-md-4" | {Padding}{Right}, {Medium Screens and Above}, {4px} <br/><small>0 Padding on All Smaller Screens.</small>


<h3>Margin Use Example</h3>

```
{{view '@spacing'}}
```

<h3>Padding Use Example</h3>
```
{{view '@spacing--padding'}}
```

<h3>The Center Class</h3>

We have a class called “mx-auto” that horizontally centers fixed-width block-level content. If the content has display: block; and a set width, our class will set the horizontal margins to auto.

```
{{view '@spacing--center'}}
```
