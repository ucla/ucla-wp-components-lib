---
title: Icons
---
<a class="create-button small" href="https://bitbucket.org/uclaucomm/ucla-bruin-components/issues?status=new&status=open">![bitbucket](/build/docs/img/bitbucket-icon-white.png) Report an Issue</a>
<a class="create-button small" href="https://ucla.slack.com/archives/G01KJ3GJKHS">![Slack](/build/docs/img/slack-icon-white.png) Join the Slack Discussion</a>

Icons in our library are provided as an extension. If you are using our UCLA WordPress theme, the icons are conveniently installed on your site. We have also supplied the icons for download via zip file.

### **Download Icons**
<a class="create-button" href="/UCLA-WEB-ICONS.zip">Download Icons Zip File</a>

## **Usage**

### **Accessibility Requirements**
The supplied icons are ADA compliant and have been reviewed by the DCP. Strategic Communications strongly encourages the use of light weight SVGs for UCLA websites or application. All icons are available in SVG format and can be used as raw SVG code or by linking to the image files. Icons have been created and reviewed according to the known needs of the university.

1. Export as SVG version1.1 to convert SVG to inline styles.
2. IDs removed have been removed to prevent duplicate IDs per page in case icon is used more than once per page.
4. Classes updated to BEM naming convention.
5. Inline titles tags added to the SVG.
6. DCP has reviewed the icon with a screen reader.


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

<img alt="download" src="/img/icons/denotive/download--black.svg">
<img alt="download" src="/img/icons/denotive/download--white.svg" style="background: #2774AE">
<img alt="download" src="/img/icons/denotive/download--blue.svg">

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
