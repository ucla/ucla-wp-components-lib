---
title: Forms
---
## Collect information from users or filter content with form select and search fields

## **Usage**

### **Usability Guidance**

* Tell people why you're collecting their information and what you're going to do with it.
* Immediately validate entries to reassure users they entered the information correctly. Don't wait for the form submission to communicate missing or erroneous information.
* Provide clear and non-judgmental error messages to help users correct their mistakes.
* Use placeholders or contextual tips to help people provide the right data.
* Auto-format data rather than asking users to match your standards, e.g. 3107941234 should auto-format to (310) 794-1234. Or separate data inputs to avoid this problem altogether, e.g. (`310`) `794`-`1234` x`555`.
* Use the right input type to aid with validation and substitute relevant keyboards. For instance, if you use `<input type="tel">`, mobile browsers will dynamically substitute a numeric keypad to enter a phone numbers. If you use `<input type="email">`  or `type="url">` mobile browsers will display `@`, `.`, `/` and `.com` buttons for quicker entry.
* Divide long forms into multiple steps and indicate their progress, e.g. "Step 3 of 4: Payment Method".
* Clearly state if and when users can expect a response from your department.

### **Accessibility Requirements**

* Create tab order and focus states for keyboard navigation at a minimum.
* Style focus states for users who tab through form fields using their keyboard.
* Use `<fieldset>` containers and `<legend>` and `<label>` elements to denote sections and fields of the form.

## **Text Inputs**

### **Anatomy**

<img class="doc-images" alt="Text Inputs Anatomy Image" title="Text Inputs Anatomy Image" src="/build/%!CurrentVersion%!/docs/img/Form/Text_Fields/textfields-anatomy.jpg"/>

1. Label (required)
2. Input Placeholder Text (optional)
3. Container (required)
4. Helper Text (optional)
5. Input Text (optional)
6. Error Border (required)
7. Error Messaging (required)
8. Icon (optional)


### **States**

<img class="doc-images" alt="Text Inputs States Image" title="Text Inputs States Image" src="/build/%!CurrentVersion%!/docs/img/Form/Text_Fields/textfields-states.jpg"/>

### **Specs**

<img class="doc-images" alt="Text Inputs Specs Image" title="Text Inputs Specs Image" src="/build/%!CurrentVersion%!/docs/img/Form/Text_Fields/textfields-specs.jpg"/>

### **Code**

```
{{view '@forms--text'}}
```

## **Select Menus**

### **Anatomy**

<img class="doc-images" alt="Select Menus Anatomy Image" title="Select Menus Anatomy Image" src="/build/%!CurrentVersion%!/docs/img/Form/Select_Menu/selectmenu-anatomy.jpg"/>

1. Label (required)
2. Input Placeholder Text (optional)
3. Container (required)
4. Helper Text (optional)
5. Icon (required)
6. Input Text (optional)
7. Error Border (required)
8. Error Messaging (required)

### **States**

<img class="doc-images" alt="Select Menus States Image" title="Select Menus States Image" src="/build/%!CurrentVersion%!/docs/img/Form/Select_Menu/selectmenu-states.jpg"/>

### **Specs**

<img class="doc-images" alt="Select Menus Specs Image" title="Select Menus Specs Image" src="/build/%!CurrentVersion%!/docs/img/Form/Select_Menu/selectmenu-specs.jpg"/>

### **Code**

```
{{view '@forms--select-menu'}}
```

## **Checkboxes**

### **Anatomy**

<img class="doc-images" alt="Checkboxes Anatomy Image" title="Checkboxes Anatomy Image" src="/build/%!CurrentVersion%!/docs/img/Form/Checkboxes/checkboxes-anatomy.jpg"/>

1. Checkbox (required)
2. Label (required)

### **States**

<img class="doc-images" alt="Checkboxes States Image" title="Checkboxes States Image" src="/build/%!CurrentVersion%!/docs/img/Form/Checkboxes/checkboxes-states.jpg"/>

### **Specs**

<img class="doc-images" alt="Checkboxes Specs Image" title="Checkboxes Specs Image" src="/build/%!CurrentVersion%!/docs/img/Form/Checkboxes/checkboxes-specs.jpg"/>

### **Code**

```
{{view '@forms--checkbox'}}
```
## **Radio Buttons**

### **Anatomy**

<img class="doc-images" alt="Radio Buttons Anatomy Image" title="Radio Buttons Anatomy Image" src="/build/%!CurrentVersion%!/docs/img/Form/Radio_Buttons/radiobtn-anatomy.jpg"/>

1. Radio button (required)
2. Label (required)


### **States**

<img class="doc-images" alt="Radio Buttons States Image" title="Radio Buttons States Image" src="/build/%!CurrentVersion%!/docs/img/Form/Radio_Buttons/radiobtn-states.jpg"/>

### **Specs**

<img class="doc-images" alt="Radio Buttons Specs Image" title="Radio Buttons Specs Image" src="/build/%!CurrentVersion%!/docs/img/Form/Radio_Buttons/radiobtn-specs.jpg"/>

### **Code**

```
{{view '@forms--radio'}}
```

## **Security Captcha**

### **Anatomy**

<img class="doc-images" alt="Security Captcha Anatomy Image" title="Security Captcha Anatomy Image" src="/build/%!CurrentVersion%!/docs/img/Form/Captacha/captcha-anatomy.jpg"/>

1. Google reCaptcha

### **Specs**

<img class="doc-images" alt="Security Captcha Specs Image" title="Security Captcha Specs Image" src="/build/%!CurrentVersion%!/docs/img/Form/Captacha/captcha-specs.jpg"/>

### **Code**

<!--Security Captcha code here, if applicable-->

## **Fieldsets and Legends**

### **Anatomy**

<img class="doc-images" alt="Fieldsets and Legends Anatomy Image" title="Fieldsets and Legends Anatomy Image" src="/build/%!CurrentVersion%!/docs/img/Form/Fieldset-Legends/fieldsetlegend-anatomy.jpg"/>

1. Legend
2. Fieldset


### **Specs**

<img class="doc-images" alt="Fieldsets and Legends Specs Image" title="Fieldsets and Legends Specs Image" src="/build/%!CurrentVersion%!/docs/img/Form/Fieldset-Legends/fieldsetlegend-specs.jpg"/>

### **Code**

```
{{view '@forms--fieldset-legend'}}
```

## **Error Handling**

To trigger errors, the "hasError" class name should be included in the inputs's parent div. This feature is currently only available for the "select" and "text" inputs.

Our script library includes a function that can be used to dynamically append error class names to these divs.

Before checking and triggering errors, please use the "clearErrors" function to clear the form of previous errors.

### **Code**
```
<form class="example-form">
<!-- this select class does not have an error -->
  <div class="select">
    <label class="select__label" for="solo_selection">Label</label>
    <select class="select__menu" name="solo_selection">
      <option class="select__placeholder" disabled selected>Make a selection</option>
    </select>
    <span class="select__help">Helpful text goes here</span>
    <span class="select__error"></span>
  </div>
  <!-- this text input class does not have an error -->
  <div class="text">
    <label class="text__label" for="example_textinput">Label</label>
    <input class="text__input" type="text" name="example_textinput">
    <span class="text__help">Helpful text goes here</span>
    <span class="text__error"></span>
  </div>
</form>

<script>
  $('.example-form').submit(function(e) {
    e.preventDefault();

    // call UCLA script function to clear previous errors
    // "this" or form DOM object must be passed as a parameter
    clearErrors(this);

    // call UCLA function to trigger error to input name and append error messages
    triggerError('solo_selection', 'This solo selection has an error');
    triggerError('example_textinput', 'This text input has an error');
    })
</script>
```

### **Example of HTML After Errors are Triggered**
```
<form class="example-form">
<!-- this select has an error -->
  <div class="select hasError">
    <label class="select__label" for="solo_selection">Label</label>
    <select class="select__menu" name="solo_selection">
      <option class="select__placeholder" disabled selected>Make a selection</option>
    </select>
    <span class="select__help">Helpful text goes here</span>
    <!-- The error message has been updated -->
    <span class="select__error">This solo selection has an error</span>
  </div>
  <!-- this text input class has an error -->
  <div class="text hasError">
    <label class="text__label" for="example_textinput">Label</label>
    <input class="text__input" type="text" name="example_textinput">
    <span class="text__help">Helpful text goes here</span>
    <!-- The error message has been updated -->
    <span class="text__error">This text input has an error</span>
  </div>
</form>
```
