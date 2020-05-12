---
title: Spacing
---

## Spacing

Assign responsive margin or padding values to an element or child elements with shorthand classes. Includes support for divs, paragraghs, and html5 elements, vertical or horizontal properties. Classes are built from a default Sass map ranging from in multiples of 4 from 4px to 72px.

## <center>The Spacing Class Structure</center>

<center>{property}{sides}-{size}</center>

### Class Values
Property | Sides | Size
------------ | ------------- | -------------
"m" = Margin | "t" = Top | "4" = 4px
"p" = padding | "r" = Right | "8" = 8px
 | "b" = bottom | "12" = 12px
 | "l" = left | "16" = 16px
 | | "24" = 24px
 | | "32" = 32px
 | | "36" = 36px
 | | "40" = 40px
 | | "48" = 48px
 | | "56" = 56px
 | | "64" = 64px
 | | "72" = 72px

### Class Examples
 Class Example | Spacing Size
 ------------ | -------------
 "mb-4" | {Margin}{Bottom}, All Screens, {4px}
 "ml-xl-4" | {Margin}{Left}, {Extra Large Screens Only}, {4px}. <br/><small>0 Margin on All Smaller Screens.</small>
 "pr-md-4" | {Padding}{Right}, {Medium Screens and above}, {4px}. <br/><small>0 Padding on All Smaller Screens.</small>


### Margin Use Example

```
{{view '@spacing'}}
```

### Padding Use Example
```
{{view '@spacing--two'}}
```

### The Center Class

We have class for horizontally centering fixed-width block level content, "mx-auto", content that has display: block and a width set—by setting the horizontal margins to auto.

```
{{view '@spacing--three'}}
```
