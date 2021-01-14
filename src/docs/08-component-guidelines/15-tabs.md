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
* Ensure component is keyboard accessible. User should be able to focus on tabs with right/left arrows.

**Further Readings**

* [ARIA tab role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role) (Mozilla)

## **Anatomy**

<img class="doc-images" alt="Tabs Anatomy Image" title="Tabs Anatomy Image" src="/build/docs/img/Tabs/tab-anatomy.jpg"/>

1. Container (required)
2. Active tab label (required)
3. Active tab indicator (required)
4. Inactive text label (required)
5. Tab item


## **States**

<img class="doc-images" alt="Tabs States Image" title="Tabs States Image" src="/build/docs/img/Tabs/tab-states.jpg"/>

## **Specs**

<img class="doc-images" alt="Tabs Specs Image" title="Tabs Specs Image" src="/build/docs/img/Tabs/tab-specs.jpg"/>

## **Code**

### HTML

```
{{ view '@tabs' }}
```

### JavaScript

The following script is required for the tabs component to work. Find the file at `/src/js/tabs.js`.

The script does the following:
- resets width of tab buttons and wraps button text if the width is greater than the container
- binds tab, back tab, and arrow keys to event listeners
- applies automatic activation of tab panels when corresponding tab receives focus
- applies focus on correct elements

```$(document).ready(function (){

  /*
  *   This content is licensed according to the W3C Software License at
  *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
  */
  (function () {
    let tablist = document.querySelectorAll('[role="tablist"]')[0];
    let tabs;
    let panels;
    let delay = determineDelay();

    // Exit the script if tablist is not defined (on any page where exists no tablist)
    if (!tablist) {
      return;
    }

    // Set overflow styles
    setOverflowStyles(tablist);

    generateArrays();

    function generateArrays () {
      tabs = document.querySelectorAll('[role="tab"]');
      panels = document.querySelectorAll('[role="tabpanel"]');
    };

    // For easy reference
    let keys = {
      end: 35,
      home: 36,
      left: 37,
      up: 38,
      right: 39,
      down: 40,
      delete: 46
    };

    // Add or subtract depending on key pressed
    let direction = {
      37: -1,
      38: -1,
      39: 1,
      40: 1
    };

    // Bind listeners
    for (i = 0; i < tabs.length; ++i) {
      addListeners(i);
    };

    // Check if tabs overflow max-width of container
    function isTabListOverflow (tablist) {
      let buttonWidth = 0;
      let buttons = tablist.querySelectorAll('[role="tab"]');

      for (let idx = 0; idx < buttons.length; idx++) {
        buttonWidth += buttons[idx].offsetWidth;
      }
      return buttonWidth > tablist.offsetWidth;
    }

    function setOverflowStyles (tablist) {
      if (isTabListOverflow(tablist)) {
        // tablist.style['overflow'] = 'scroll';

        for (let i = 0; i < tablist.children.length; i++) {
          tablist.children[i].style['width'] = '25%';
          tablist.children[i].style['white-space'] = 'normal';
          tablist.children[i].style['vertical-align'] = 'bottom';
        }
      }
    }

    function addListeners (index) {
      tabs[index].addEventListener('click', clickEventListener);
      tabs[index].addEventListener('keydown', keydownEventListener);
      tabs[index].addEventListener('keyup', keyupEventListener);

      // Build an array with all tabs (<button>s) in it
      tabs[index].index = index;
    };

    // When a tab is clicked, activateTab is fired to activate it
    function clickEventListener (event) {
      let tab = event.target;
      activateTab(tab, false);
    };

    // Handle keydown on tabs
    function keydownEventListener (event) {
      let key = event.keyCode;

      switch (key) {
      case keys.end:
        event.preventDefault();
        // Activate last tab
        activateTab(tabs[tabs.length - 1]);
        break;
      case keys.home:
        event.preventDefault();
        // Activate first tab
        activateTab(tabs[0]);
        break;

      // Up and down are in keydown
      // because we need to prevent page scroll >:)
      case keys.up:
      case keys.down:
        determineOrientation(event);
        break;
      };
    };

    // Handle keyup on tabs
    function keyupEventListener (event) {
      let key = event.keyCode;

      switch (key) {
      case keys.left:
      case keys.right:
        determineOrientation(event);
        break;
      case keys.delete:
        determineDeletable(event);
        break;
      };
    };

    // When a tablist's aria-orientation is set to vertical,
    // only up and down arrow should function.
    // In all other cases only left and right arrow function.
    function determineOrientation (event) {
      let key = event.keyCode;
      let vertical = tablist.getAttribute('aria-orientation') === 'vertical';
      let proceed = false;

      if (vertical) {
        if (key === keys.up || key === keys.down) {
          event.preventDefault();
          proceed = true;
        };
      }
      else {
        if (key === keys.left || key === keys.right) {
          proceed = true;
        };
      };

      if (proceed) {
        switchTabOnArrowPress(event);
      };
    };

    // Either focus the next, previous, first, or last tab
    // depending on key pressed
    function switchTabOnArrowPress (event) {
      let pressed = event.keyCode;

      for (x = 0; x < tabs.length; x++) {
        tabs[x].addEventListener('focus', focusEventHandler);
      };

      if (direction[pressed]) {
        let target = event.target;
        if (target.index !== undefined) {
          if (tabs[target.index + direction[pressed]]) {
            tabs[target.index + direction[pressed]].focus();
          }
          else if (pressed === keys.left || pressed === keys.up) {
            focusLastTab();
          }
          else if (pressed === keys.right || pressed == keys.down) {
            focusFirstTab();
          };
        };
      };
    };

    // Activates any given tab panel
    function activateTab (tab, setFocus) {
      setFocus = setFocus || true;
      // Deactivate all other tabs
      deactivateTabs();

      // Remove tabindex attribute
      tab.removeAttribute('tabindex');

      // Set the tab as selected
      tab.setAttribute('aria-selected', 'true');

      let controls = tab.getAttribute('aria-controls');

      // Remove hidden attribute from tab panel to make it visible
      document.getElementById(controls).removeAttribute('hidden');

      // Set focus when required
      if (setFocus) {
        tab.focus();
      };
    };

    // Deactivate all tabs and tab panels
    function deactivateTabs () {
      for (t = 0; t < tabs.length; t++) {
        tabs[t].setAttribute('tabindex', '-1');
        tabs[t].setAttribute('aria-selected', 'false');
        tabs[t].removeEventListener('focus', focusEventHandler);
      };

      for (p = 0; p < panels.length; p++) {
        panels[p].setAttribute('hidden', 'hidden');
      };
    };

    // Focus first tab
    function focusFirstTab () {
      tabs[0].focus();
    };

    // Focus last tab
    function focusLastTab () {
      tabs[tabs.length - 1].focus();
    };

    // Detect if a tab is deletable
    function determineDeletable (event) {
      target = event.target;

      if (target.getAttribute('data-deletable') !== null) {
        // Delete target tab
        deleteTab(event, target);

        // Update arrays related to tabs widget
        generateArrays();

        // Activate the closest tab to the one that was just deleted
        if (target.index - 1 < 0) {
          activateTab(tabs[0]);
        }
        else {
          activateTab(tabs[target.index - 1]);
        };
      };
    };

    // Deletes a tab and its panel
    function deleteTab (event) {
      let target = event.target;
      let panel = document.getElementById(target.getAttribute('aria-controls'));

      target.parentElement.removeChild(target);
      panel.parentElement.removeChild(panel);
    };

    // Determine whether there should be a delay
    // when user navigates with the arrow keys
    function determineDelay () {
      let hasDelay = tablist.hasAttribute('data-delay');
      let delay = 0;

      if (hasDelay) {
        let delayValue = tablist.getAttribute('data-delay');
        if (delayValue) {
          delay = delayValue;
        }
        else {
          // If no value is specified, default to 300ms
          delay = 300;
        };
      };

      return delay;
    };

    //
    function focusEventHandler (event) {
      let target = event.target;

      setTimeout(checkTabFocus, delay, target);
    };

    // Only activate tab on focus if it still has focus after the delay
    function checkTabFocus (target) {
      focused = document.activeElement;

      if (target === focused) {
        activateTab(target, false);
      };
    };

  }());
});

```
