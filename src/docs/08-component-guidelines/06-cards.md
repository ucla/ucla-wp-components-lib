## Preview articles, topics, and events in a visual way

## **Usage**

### **Usability Guidance**

* Use plain language when writing headlines and descriptions.
* Avoid technical language, acronyms or jargon people don't understand.
* Front-load the first 2 words of your headlines for [easy eye scanning](https://www.nngroup.com/articles/first-2-words-a-signal-for-scanning/).
* Limit descriptions below headlines to one sentence or 2-3 lines.
* Use original images rather than stock images to maintain credibility and trust among your users.

**Further Reading**

[Cards](https://inclusive-components.design/cards/) (Inclusive Components)<br>
[5 Tips for Writing Headlines That Convert](https://www.nngroup.com/articles/headings-pickup-lines/) (Nielsen Norman Group)<br>
[First 2 Words: A Signal for the Scanning Eye](https://www.nngroup.com/articles/first-2-words-a-signal-for-scanning/) (Nielsen Norman Group)

### **Accessibility Requirements**

* Link the card's headline, heading or title to provide the most succinct description to screen readers and search engines. Both technologies use links to understand and navigate document structure.
* Wrap your link around the image too if you decide to include one.
* Only use one link per card.
* Write [alt text](https://webaim.org/techniques/alttext/) for any images you include.
* Avoid linking from buttons with generic labels like "read more" or "view details". Screen readers cannot differentiate card topics with the same link text.

## **Basic Card**

### **Do’s and Don’ts**

#### **Do’s**

* Do adjust the container color of the card to grey-05 if it’s being used on a white background.

#### **Don’ts**

* Don’t adjust the container color to a color other than white or grey-05.
* Don’t use primary or secondary buttons in cards.

### **Anatomy**

<img class="doc-images" title="Basic Card Anatomy Image" src="/build/docs/img/Cards/Basic_Card/basiccard-anatomy.jpg"/>

1. Image (optional)
2. Title (required)
3. Supporting text (optional)
4. Buttons (optional)
5. Container (required)

### **Specs**

<img class="doc-images" title="Basic Card Specs Image" src="/build/docs/img/Cards/Basic_Card/basiccard-specs.jpg"/>

### **Code**

Use the `<article>` element to denote your card as a standalone element within the body of your page.

```
{{view '@cards--basic'}}
```

## **Event Card**

### **Anatomy**

<img class="doc-images" title="Event Card Anatomy Image" src="/build/docs/img/Cards/Event_Card/eventcard-anatomy.jpg"/>

1. Date (required)
2. Image (required)
3. Title (required)
4. Time and Location (required)
5. Description (optional)
6. Container (required)


### **Specs**

<img class="doc-images" title="Event Card Specs Image" src="/build/docs/img/Cards/Event_Card/eventcard-specs.jpg"/>

### **Code**

Use the `<article>` element to denote your card as a standalone element within the body of your page.

```
{{view '@cards--event'}}
```

## **Featured Story Card**

### **Do’s and Don’ts**

#### **Do’s**

* Only use one Featured Card per section.

#### **Don’ts**

* Don’t stack multiple Featured Cards in one section.

### **Anatomy**

<img class="doc-images" title="Featured Story Card Anatomy Image" src="/build/docs/img/Cards/Featured_Story_Card/featuredstorycard-anatomy.jpg"/>

1. Title (required)
2. Supporting text (optional)
3. Source (optional)
4. Text Container (required)
5. Source (optional)
6. Image (optional)
7. Background (required)


### **Specs**

<img class="doc-images" title="Featured Story Card Specs Image" src="/build/docs/img/Cards/Featured_Story_Card/featuredstorycard-specs.jpg"/>

### **Code**

Use the `<article>` element to denote your card as a standalone element within the body of your page.

```
{{view '@cards--featured-story'}}
```

## **Story Card**

### **Anatomy**

<img class="doc-images" title="Story Card Anatomy Image" src="/build/docs/img/Cards/Story_Card/storycard-anatomy.jpg"/>

1. Image (optional)
2. Title (required)
3. Supporting text (optional)
4. Source (optional)
5. Background (required)

### **Specs**

<img class="doc-images" title="Story Card Specs Image" src="/build/docs/img/Cards/Story_Card/storycard-specs.jpg"/>

### **Code**

Use the `<article>` element to denote your card as a standalone element within the body of your page.

```
{{view '@cards--story'}}
```

## **Person Card**

### **Anatomy**

<img class="doc-images" title="Person Card Anatomy Image" src="/build/docs/img/Cards/Person_Card/personcard-anatomy.jpg"/>

1. Image (optional)
2. Title (required)
3. Supporting text (optional)
4. Source (optional)
5. Background (required)  

### **Specs**

<img class="doc-images" title="Person Card Specs Image" src="/build/docs/img/Cards/Person_Card/personcard-specs.jpg"/>

### **Code**

Use the `<article>` element to denote your card as a standalone element within the body of your page.

```
{{view '@cards--person'}}
```
