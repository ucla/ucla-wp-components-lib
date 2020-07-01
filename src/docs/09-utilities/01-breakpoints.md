---
title: Breakpoints
---

We have defined commonly used breakpoints to make development for all screen sizes more efficient.

These breakpoint variables are defined in a map called `$grid-breakpoints` at `/src/scss/utilities/_variables.scss`.

Variable | Viewport Width | Viewports
------------ | ------------- | -------------
`na` | 0px | n/a
`xs` | 480px | Extra Small / Mobile Devices
`sm` | 600px | Small / Mobile Devices
`md` | 768px | Medium / Tablet devices
`lg` | 1024px | Large / Desktop or laptop devices
`xl` | 1280px | Extra Large / Presentation Mode

## Helpful Mixins

The following mixins are defined at `/src/scss/utilities/_mixins/_breakpoints.scss`.

### breakpoint-min
`breakpoint-min` takes in a breakpoint variable we've defined and returns the value.

```
>> breakpoint-min(sm)
>> 600px
```

### breakpoint-max
`breakpoint-max` takes in a breakpoint variable we've defined and returns the max value for the breakpoint.

```
>> breakpoint-max(sm)
>> 767px
```

## Breakpoint Examples
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
