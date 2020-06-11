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

![Text Inputs Anatomy Image](/docs/img/Form/Text_Fields/textfields-anatomy.jpg)
1. Label (required)
2. Input Placeholder Text (optional)
3. Container (required)
4. Helper Text (optional)
5. Input Text (optional)
6. Error Border (required)
7. Error Messaging (required)
8. Icon (optional)


### **States**

![Text Inputs States Image](/docs/img/Form/Text_Fields/textfields-states.jpg)

### **Specs**

![Text Inputs Specs Image](/docs/img/Form/Text_Fields/textfields-specs.jpg)  

### **Code**

<!--Text Inputs code here, if applicable-->

## **Select Menus**

### **Anatomy**

![Select Menus Anatomy Image](/docs/img/Form/Select_Menu/selectmenu-anatomy.jpg)

1. Label (required)
2. Input Placeholder Text (optional)
3. Container (required)
4. Helper Text (optional)
5. Icon (required)
6. Input Text (optional)
7. Error Border (required)
8. Error Messaging (required)

### **States**

![Select Menus States Image](/docs/img/Form/Select_Menu/selectmenu-states.jpg)  

### **Specs**

![Select Menus Specs Image](/docs/img/Form/Select_Menu/selectmenu-states.jpg)

### **Code**

<!--Select Menus code here, if applicable-->

## **Checkboxes**

### **Anatomy**

![Checkboxes Anatomy Image](/docs/img/Form/Checkboxes/checkboxes-anatomy.jpg)

1. Checkbox (required)
2. Label (required)

### **States**

![Checkboxes States Image](/docs/img/Form/Checkboxes/checkboxes-states.jpg)  

### **Specs**

![Checkboxes Specs Image](/docs/img/Form/Checkboxes/checkboxes-specs.jpg)

### **Code**

<!--Checkboxes code here, if applicable-->

## **Radio Buttons**

### **Anatomy**

![Radio Buttons Anatomy Image](/docs/img/Form/Radio_Buttons/radiobtn-anatomy.jpg)

1. Radio button (required)
2. Label (required)


### **States**

![Radio Buttons States Image](/docs/img/Form/Radio_Buttons/radiobtn-states.jpg)  

### **Specs**

![Radio Buttons Specs Image](/docs/img/Form/Radio_Buttons/radiobtn-specs.jpg)  

### **Code**

<!--Radio Buttons code here, if applicable-->

## **Security Captcha**

### **Anatomy**

![Security Captcha Anatomy Image](/docs/img/Form/Captacha/captcha-anatomy.jpg)

1. Google reCaptcha

### **Specs**

![Security Captcha Specs Image](/docs/img/Form/Captacha/captcha-specs.jpg)  

### **Code**

<!--Security Captcha code here, if applicable-->

## **Fieldsets and Legends**

### **Anatomy**

![Fieldsets and Legends Anatomy Image](/docs/img/Form/Fieldset-Legends/fieldsetlegend-anatomy.jpg)

1. Legend
2. Fieldset


### **Specs**

![Fieldsets and Legends Specs Image](/docs/img/Form/Fieldset-Legends/fieldsetlegend-specs.jpg)  

### **Code**

<!--Fieldsets and Legends code here, if applicable-->
