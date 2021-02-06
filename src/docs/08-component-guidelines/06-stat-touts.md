---
title: Factoids, Rankings and Statistics
label: Factoids, Rankings and Statistics
---
## Highlight an important fact, data point, or ranking

As an institution of higher learning and research, we have a lot of useful data and information to share with the public, and accomplishments we can tout. Use these highly visual callouts to do it.

## **Usage**

### **Usability Guidance**

* When using rankings or statistics touts, limit use to three across per section.
* When using factoids, limit use to one per section.
* All three variations are designed to be responsive -- they will stack on mobile.
* Use the `stat-tout--inline` variation class to horizontally align a number and label.
* When grouping multiple touts across a section, wrap all stat touts in a `<div class="stat-set"></div>` container. This handles responsiveness and aligning the touts.
* Provide a source if the data or ranking comes from another program or institution.

### **Accessibility Requirements**

* Use the `<aside>` element to denote factoids and statistics as standalone content.
* Use CSS to style italicized copy, instead of using `<em>` or `<i>` HTML tags.

## **Factoid**

### **Do’s and Don’ts**

#### **Do’s**
* Do use only one factoid per section of content.
* Do include the `stat-tout--inline` variation class when using a factoid.

#### **Don’ts**
* Don’t group more than one factoid together.

### **Anatomy**

<img class="doc-images" alt="Factoid Anatomy Image" title="Factoid Anatomy Image" src="/build/docs/img/Factoids-Rankings-Statistics/Factoids/factoid-anatomy.jpg"/>

1. Factoid Text (required)
2. Border (required)
3. Container (required)

### **Specs**

<img class="doc-images" alt="Factoid Specs Image" title="Factoid Specs Image" src="/build/docs/img/Factoids-Rankings-Statistics/Factoids/factoid-specs.jpg"/>

### **Code**

```
{{view '@stat-touts--factoid'}}
```

## **Rankings**

### **Do’s and Don’ts**

#### **Do’s**
* Do limit three rankings per section of content.
* Do wrap multiple rankings in a `<div class="stat-set"></div>` container.
* Do include a source if data or ranking comes from another program or institution.

#### **Don’ts**
* Don’t group more than four rankings in a `div.stat-set` container.

### **Anatomy**

<img class="doc-images" alt="Rankings Anatomy Image" title="Rankings Anatomy Image" src="/build/docs/img/Factoids-Rankings-Statistics/Rankings/ranking-anatomy.jpg"/>

1. Ranking Text (required)
2. Descriptor Text (required)
3. Source Text (required)
4. Border (required)
5. Container (required)

### **Specs**

<img class="doc-images" alt="Rankings Specs Image" title="Rankings Specs Image" src="/build/docs/img/Factoids-Rankings-Statistics/Rankings/ranking-specs.jpg"/>

### **Code**

```
{{view '@stat-touts--ranking'}}
```

## **Statistics**

### **Do’s and Don’ts**

#### **Do’s**
* Do limit three statistics per section of content.
* Do wrap multiple statistics in a `<div class="stat-set"></div>` container.

#### **Don’ts**
* Don’t group more than four statistics in a `div.stat-set` container.

### **Anatomy**

<img class="doc-images" alt="Statistics Anatomy Image" title="Statistics Anatomy Image" src="/build/docs/img/Factoids-Rankings-Statistics/Statistics/statistic-anatomy.jpg"/>

1. Value Text (required)
2. Descriptor Text (required)
3. Container Text (required)
4. Numerator Text (required for 2 variable statistics)
5. Parameter Text (required for 2 variable statistics)
6. Denominator Text (required for 2 variable statistics)

### **Variations**

<img class="doc-images" alt="Statistics Variations Image" title="Statistics Variations Image" src="/build/docs/img/Factoids-Rankings-Statistics/Statistics/statistic-variations.jpg"/>

### **Specs**

<img class="doc-images" alt="Statistics Specs Image" title="Statistics Specs Image" src="/build/docs/img/Factoids-Rankings-Statistics/Statistics/statistic-specs.jpg"/>

### **Code**

```
{{view '@stat-touts--statistics'}}
```
