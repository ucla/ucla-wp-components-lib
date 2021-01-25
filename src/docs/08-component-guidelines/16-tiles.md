---
title: Tiles
---

## Large, Descriptive Link with Optional Ambient Image

## **Usage**

### **Usability Guidance**

* Use plain language when writing headlines and descriptions.
* Avoid technical language, acronyms or jargon people don't understand.
* Front-load the first 2 words of your headlines for [easy eye scanning](https://www.nngroup.com/articles/first-2-words-a-signal-for-scanning/).
* Limit headlines to one phrase or 2 lines -- there is a maximum character limit.
* Use original images rather than stock images to maintain credibility and trust among your users.

### **Code Guidance**

#### Tile Section
* Use the `<section>` element to denote your tile section within the base `ucla` `campus` grid in the body of your page.
* To set the desired number of columns, add a modifier to the component at the same level as the `tile__section` class. Up to four columns are supported, using `tile__section--col-1`, `tile__section--col-2`, `tile__section--col-3` and `tile__section--col-4` classes.
* The tiles will be left-aligned by default. To center align, use the modifier class `tile__section--centered` at the same level as `tile__section`.

#### Tile
* A tile's background will be solid blue by default and should be used on light backgrounds. For background image variations, add a background modifier class to the stylesheet and at the same level as the `tile__background` class. Some examples of modifier classes include `tile__background--royce`, `tile__background--students` and `tile__background--events`.

### **Accessibility Requirements**

* Link the tile's headline, heading or title to provide the most succinct description to screen readers and search engines. Both technologies use links to understand and navigate document structure.
* Avoid using generic headlines like "read more" or "view details".
* Write [alt text](https://webaim.org/techniques/alttext/) for any background images you include.
* For tiles with background images set, place the alt text in the aria-label attribute.
* Only use one link per tile.
* Avoid using multiple tiles in a row that direct to the same link destination.
* Avoid relying on the background image to convey important information. The user should be able to have the same experience with or without the image.


**Further Reading**
* https://www.webaxe.org/resources-for-developing-accessible-cards-tiles/
* https://www.davidmacd.com/blog/what-is-pure-decoration-alt-text-in-wcag.html

## **Anatomy**

<figure>
  <img class="doc-images" alt="Basic Post Tiles Anatomy Image - Mobile" title="Basic Post Tiles Anatomy Image" src="/build/docs/img/Tile/basictile-anatomy-mobile.jpg"/>
  <figcaption>Basic Tile Anatomy - Mobile</figcaption>
</figure>

<figure>
  <img class="doc-images" alt="Basic Post Tiles Anatomy Image - Desktop" title="Basic Post Tiles Anatomy Image" src="/build/docs/img/Tile/basictile-anatomy-desktop.jpg"/>
  <figcaption>Basic Tile Anatomy - Desktop</figcaption>
</figure>

1. Tile Label (required)
2. Gold Bar (required)
3. Container (required)
4. Photo (Required)

## **States**

<figure>
  <img class="doc-images" alt="Basic Post Tiles States Image" title="Basic Post Tiles States Image" src="/build/docs/img/Tile/basictile-states-mobile.jpg"/>
  <figcaption>Basic Tile States - Mobile</figcaption>
</figure>

<figure>
  <img class="doc-images" alt="Basic Post Tiles States Image" title="Basic Post Tiles States Image" src="/build/docs/img/Tile/basictile-states-desktop.jpg"/>
  <figcaption>Basic Tile States - Desktop</figcaption>
</figure>

## **Specs**

<figure>
  <img class="doc-images" alt="Basic Post Tiles Specs Image" title="Basic Post Tiles Specs Image" src="/build/docs/img/Tile/basictile-specs-mobile.jpg"/>
  <figcaption>Basic Tile Specs - Mobile</figcaption>
</figure>

<figure>
  <img class="doc-images" alt="Basic Post Tiles Specs Image" title="Basic Post Tiles Specs Image" src="/build/docs/img/Tile/basictile-specs-desktop.jpg"/>
  <figcaption>Basic Tile Specs - Desktop</figcaption>
</figure>

## **Code**

```
{{view '@basic-tile'}}
```
