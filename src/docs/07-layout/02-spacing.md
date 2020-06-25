---
title: Spacing
---

# **Spacing**

## **Introduction**

We use an 8-point grid to define our spacing, meaning we use multiples of 8, from 4 to 80. We define dimensions, padding, and margins of both block and inline elements. Individual elements are positioned relative to each other. Smaller components, such as iconography and typography, can align to a 4-point grid.

## **Specs**

### Inline Spacing Specs Illustration
<img class="doc-images" alt="Inline Spacing Specs" title="Inline Spacing Specs" src="/build/docs/img/Spacing/inline-spacing-specs.jpg"/>

### Spacing Inset Illustration
<img class="doc-images" alt="Spacing Inset Specs" title="Spacing Inset Specs" src="/build/docs/img/Spacing/spacing-inset-specs.jpg"/>

### Spacing Inset Squish Illustration
<img class="doc-images" alt="Spacing Inset Squish Specs" title="Spacing Inset Squish Specs" src="/build/docs/img/Spacing/spacing-inset-squish-specs.jpg"/>

### Spacing Inset Stretch Illustration
<img class="doc-images" alt="Spacing Inset Squish Specs" title="Spacing Inset Squish Specs" src="/build/docs/img/Spacing/spacing-inset-stretch-specs.jpg"/>

### Spacing Stack Illustration
<img class="doc-images" alt="Spacing Stack Specs" title="Spacing Stack Specs" src="/build/docs/img/Spacing/spacing-stack-specs.jpg"/>

## **Code**
<!--Removed text under “Spacing” (and “Spacing” heading itself) and placed under “Spacing Class Structure below-->

### **Spacing Class Structure**

We created responsive margin and padding classes that use the following shorthand for values. These classes are built from a default Sass map in multiples of 8, ranging from 4 to 80, and support divs, paragraphs, and HTML5 elements.

Use this format:

{property}{sides}-{breakpoint variable (optional)}-{size}

### **Class Values**
Property | Sides | SCSS Breakpoint Variable | Size
------------ | ------------- | ------------- | -------------
"m" = Margin | "t" = Top | "xs" | "4" = 4px
"p" = Padding | "r" = Right | "sm" |  "8" = 8px
 | "b" = Bottom | "md" |  "12" = 12px
 | "l" = Left | "lg" |  "16" = 16px
 | "x" = set both *-left and *-right | "xs" | "24" = 24px
 | "y" = set both *-top and *-bottom | | "32" = 32px
 | | | "36" = 36px
 | | | "40" = 40px
 | | | "48" = 48px
 | | | "56" = 56px
 | | | "64" = 64px
 | | | "72" = 72px

### **Class Examples**
 Class Example | Spacing Size
 ------------ | -------------
 "mb-4" | {Margin}{Bottom}, All Screens, {4px}
 "ml-xl-4" | {Margin}{Left}, {Extra Large Screens Only}, {4px} <br/><small>0 Margin on All Smaller Screens.</small>
 "pr-md-4" | {Padding}{Right}, {Medium Screens and Above}, {4px} <br/><small>0 Padding on All Smaller Screens.</small>


### **Margin Use Example**

```
{{view '@spacing'}}
```

### **Padding Use Example**
```
{{view '@spacing--padding'}}
```

### **The Center Class**

We have a class called “mx-auto” that horizontally centers fixed-width block-level content. If the content that has display: block; and a set width, our class will set the horizontal margins to auto.

```
{{view '@spacing--center'}}
```
