---
title: Tabs
---
## Navigate content within a page or section of your site

Tabs provide the ability to navigate different views or facets of the same content. For example, on a page listing your department's faculty, you might show leadership, tenured, and adjunct instructors in different views. Rather than listing those views in your navigation, you could divide them into tabs.

Tabs can represent static pages or dynamic views of one page, with a single or multiple URL for each view.

## **Usage**

### **Usability Guidance**

* Limit to 2-6 tabs within each page or section.
* Use succinct labels of 1-2 words in length for each tab.
* Visually distinguished current and other tabs with active, hover, and focus states.

### **Accessibility Requirements**

* Wrap your tabs in a container with ARIA `role="tablist"` and an `aria-label`.
* Use the button `<button>` element for tabs with ARIA `role="tab"` and `aria-selected="true"` or `"false"`.
* Use the button `<button>` element if tabs change the content view within the same page.
* Use the anchor `<a>` element if tabs link to other pages with a unique URL.

**Further Readings**

[ARIA tab role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role) (Mozilla)

## **Anatomy**

![Tabs Anatomy Image](/build/docs/img/Tabs/tab-anatomy.jpg)

1. Container (required)
2. Active tab label (required)
3. Active tab indicator (required)
4. Inactive text label (required)
5. Tab item


## **States**

![Tabs States Image](/build/docs/img/Tabs/tab-states.jpg)  

## **Specs**

![Tabs Specs Image](/build/docs/img/Tabs/tab-specs.jpg)  

## **Code**

<!--Tabs code here, if applicable-->
