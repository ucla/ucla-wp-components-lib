## Display your signature, contact information, and links to practical information

Treat the footer as your toolbox. You don't need to include lots of links, but the ones you do include should be utilitarian and helpful.

## **Usage**

### **Usability Guidance**

* Display your department's physical address and main contact information.
* Include links to essential services and information about your department.
* If displaying more than 5-6 links, divide them into columns with clearly categorized headings.

### **Code Guidance**

* Be sure to include the "tabindex='1'" global attribute and value to the global footer's social media links. This will ensure the social media links are focused in the correct order when being tabbed through.

### **Accessibility Requirements**

* Include a link to accessibility resources, either in your footer or the global footer for UCLA.
* Use the `<footer>` element to clearly differentiate the container from your main content.
* Use the `<address>` element for your contact information and `<nav>` for any footer menus.

## **Department Footer**

### **Anatomy**

<img class="doc-images" alt="Department Footer Anatomy Image" title="Department Footer Anatomy Image" src="/build/docs/img/Footer/Department_Footer/deptfooter-anatomy.jpg"/>

1. Department Logo (required)
2. Department Contact Information (required)
3. Department Social Channels (optional)
4. Department Links (optional)
5. Department Link Heading (optional)
6. Department Link (optional)


### **States**

<img class="doc-images" alt="Department Footer States Image" title="Department Footer States Image" src="/build/docs/img/Footer/Department_Footer/deptfooter-states.jpg"/>

### **Specs**

<img class="doc-images" alt="Department Footer Specs Image" title="Department Footer Specs Image" src="/build/docs/img/Footer/Department_Footer/deptfooter-specs.jpg"/>

### **Code**

```
{{view '@footer-and-email-signup--department'}}
```

## **Global Footer**

### **Anatomy**

<img class="doc-images" alt="Global Footer Anatomy Image" title="Global Footer Anatomy Image" src="/build/docs/img/Footer/Global_Footer/globalfooter-anatomy.jpg"/>

1. Copyright (required)
2. Global Links (required)
3. Global Social Channels (required)


### **States**

<img class="doc-images" alt="Global Footer States Image" title="Global Footer States Image" src="/build/docs/img/Footer/Global_Footer/globalfooter-states.jpg"/>

### **Specs**

<img class="doc-images" alt="Global Footer Specs Image" title="Global Footer Specs Image" src="/build/docs/img/Footer/Global_Footer/globalfooter-specs.jpg"/>

### **Code**

```
{{view '@footer-and-email-signup--global'}}
```

## **Email Signup**

### **Anatomy**

<img class="doc-images" alt="Email Signup Anatomy Image" title="Email Signup Anatomy Image" src="/build/docs/img/Footer/Email_Footer/emailsignup-anatomy.jpg"/>

1. Heading (required)
2. Description (optional)
3. Input Fields (required)
4. Legal (required)
5. Submit Button (required)
6. Background (required)


### **Specs**

<img class="doc-images" alt="Email Signup Specs Image" title="Email Signup Specs Image" src="/build/docs/img/Footer/Email_Footer/emailsignup-specs.jpg"/>

### **Code**

```
{{view '@footer-and-email-signup--email'}}
```
