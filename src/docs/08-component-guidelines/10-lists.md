## Display a single list of items in a quick, scannable format

The UCLA brands dictates that lists are ordered with numbers or bullets in ![#2774AE](https://via.placeholder.com/15/2774AE/000000?text=+) `#2774AE` which is the "$ucla-blue" [variable](/build/%!CurrentVersion%!/docs/colors/layout). Examples can be found [here](/build/%!CurrentVersion%!/components/detail/lists.html).

## **Usage**

### **Usability Guidance**

* Front-load the first two words of your headlines for [easy eye scanning](https://www.nngroup.com/articles/first-2-words-a-signal-for-scanning/).
* Progressively disclose lists with more than several dozen items with a 'more' link or button.

### **Accessibility Requirements**

* Use the `<li>` element for more than text-only lists. It's a critical component in web accessibility. It tells non-sighted users if they're about to browse a few items of content or hundreds. Any list of content such as news articles, calendar events, academic programs, etc. should be wrapped in `<li>` to communicate how many items belong in that list.

## **Unordered List**

### **Anatomy**

<img class="doc-images" alt="Unordered List Anatomy Image" title="Unordered List Anatomy Image" src="/build/docs/img/Lists/Unordered_List/unorderedlist-anatomy.jpg"/>

1. Tier 1 List Item (required)
2. Bullet Icon (required)
3. List Item Text (required)
4. List Item Link (optional)
5. Tier 2 List Item (optional)


### **Specs**

<img class="doc-images" alt="Unordered List Specs Image" title="Unordered List Specs Image" src="/build/docs/img/Lists/Unordered_List/unorderedlist-specs.jpg"/>

### **Code**

```
{{ view '@lists--unordered-lists' }}
```


## **Ordered List**

### **Anatomy**

<img class="doc-images" alt="Ordered List Anatomy Image" title="Ordered List Anatomy Image" src="/build/docs/img/Lists/Ordered_List/orderedlist-anatomy.jpg"/>

1. Tier 1 List Item (required)
2. Order Number (required)
3. List Item Text (required)
4. List Item Link (optional)
5. Tier 2 List Item (optional)

### **Specs**

<img class="doc-images" alt="Ordered List Specs Image" title="Ordered List Specs Image" src="/build/docs/img/Lists/Ordered_List/orderedlist-specs.jpg"/>

### **Code**

```
{{ view '@lists--ordered-lists' }}
```

## **Definitions List**

### **Anatomy**

<img class="doc-images" alt="Definitions List Anatomy Image" title="Definitions List Anatomy Image" src="/build/docs/img/Lists/Definitions_List/definitionslist-anatomy.jpg"/>

1. List Item (required)
2. Definition Text (required)
3. Description Text (required)


### **Specs**

<img class="doc-images" alt="Definitions List Specs Image" title="Definitions List Specs Image" src="/build/docs/img/Lists/Definitions_List/definitionslist-specs.jpg"/>

### **Code**

<!--Definitions List code here, if applicable-->
