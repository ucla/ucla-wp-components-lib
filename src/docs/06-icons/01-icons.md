---
title: Icons
---
Icons in our library are provided as an extension. If you are using our UCLA theme, the icons are already conveniently installed on your site. We have also supplied the icons for download via zip file.

### **Download Icons**
<a class="create-button" href="/UCLA-WEB-ICONS.zip">Download Icons Zip File</a>

## **Usage**

### **Accessibility Requirements**
The supplied icons are ADA compliant. Strategic Communications strongly encourages using these for your UCLA website or application. All icons are available in SVG format and can be used as raw SVG code or by linking to the image files.


### **Please Note**
1. Extra styling with or without divs are added to better depict white icons
1. SVG Icons: Extra div with background and display styling IS NOT REQUIRED for usage
1. IMG Icons: Extra styling attribute IS NOT required for usage

## Denotive Icons
{{view '@denotive-image'}}

## Weather Icons
{{view '@weather-image'}}

## Social Icons
{{view '@social-image'}}

## Code

### **Use as an Image**

<img alt="download" src="/img/icons/download-black.svg">
<img alt="download" src="/img/icons/download-white.svg" style="background: #2774AE">
<img alt="download" src="/img/icons/download-defaultblue.svg">

```
<!-- Download -->
<img alt="download" src="/img/icons/download-black.svg">
<img alt="download" src="/img/icons/download-white.svg" style="background: #2774AE">
<img alt="download" src="/img/icons/download-defaultblue.svg">
```

### **Use as Inline SVG**

Inline SVGs do not require a <?xml> doctype declaration. A <!DOCTYPE> should already be declared at the very top of your page.

{{view '@denotive-svg--download'}}
```
{{view '@denotive-svg--download'}}
```
