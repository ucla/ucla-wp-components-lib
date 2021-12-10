---
title: Headings
---
{{render '@support'}}

These are heading styles. Font-style should be bold for these headers.

#### **Do’s**

* Use the correct header tags when possible
* Use the respective "h1" - "h6" classnames to inherit respective header styles (i.e with CMS that makes it hard to customize HTML semantics)

#### **Don’ts**

* Don't use "h1" - "h6" classnames to incorrectly alter styles astray from the brand guidelines


{{view '@typography--h1'}}
```
<!--
Desktop: font-size: 48px; line-height: 54px;
Mobile: font-size: 36px; line-height: 40.5px; -->
{{view '@typography--h1'}}
```

{{view '@typography--h2'}}
```
<!--
Desktop: font-size: 36px; line-height: 40.5px;
Mobile: font-size: 28px; line-height: 32px; -->
{{view '@typography--h2'}}
```

{{view '@typography--h3'}}
```
<!-- Desktop & Mobile: font-size: 24px; line-height: 27px; -->
{{view '@typography--h3'}}
```

{{view '@typography--h4'}}
```
<!-- Desktop & Mobile: font-size: 20px; line-height: 22.5px; -->
{{view '@typography--h4'}}
```

{{view '@typography--h5'}}
```
<!-- Desktop & Mobile: font-size: 16px; line-height: 20px; -->
{{view '@typography--h5'}}
```

{{view '@typography--h6'}}
```
<!-- Desktop & Mobile: font-size: 12.8px; line-height: 16px; -->
{{view '@typography--h6'}}
```
