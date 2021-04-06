## Preview and navigate priority topics on your site

## **Usage**

### **Usability Guidance**

* Highlight the primary topics of your website. Help visitors understand what content they can expect to find before they start browsing your site.
* Use succinct labels of 1-2 words in length for each navigation link.
* Use universal language everyone understands.
* Consult web analytics to understand which topics matter most to your visitors.
* Prioritize the needs of site users over internal stakeholders. Navigation is for site users, not your Dean or Vice Chancellor.
* Help people find what they need rather than promoting things they don't.
* If you need to highlight things like a widely publicized report or conference, do so within the body of your website. Navigation links are intended for evergreen content.
* Adding the class `nav-primary__link--current-page` to `nav-primary__link` anchor tag will create the yellow border to the item.

**Further Reading**

* [Navigation: You Are Here](https://www.nngroup.com/articles/navigation-you-are-here/) (Nielsen Norman Group)
* [Information Scent: How User Decide Where to Go Next](https://www.nngroup.com/articles/information-scent/) (Nielsen Norman Group)
* [The 3-Click Rule for Navigation Is False](https://www.nngroup.com/articles/3-click-rule/) (Nielsen Norman Group)<br>

### **Accessibility Requirements**

* Use the `<nav>` element and ARIA labels, e.g. "Main", "Footer", "Social", etc., to identify each distinct navigation menu of your site.
* Insert a hidden skip nav with quick links to different parts of your site like the main content, navigation menus, search bar, toolbar, footer, etc.

**Further Reading**

* [Adding a link at the top of each page that goes directly to the main content area](https://www.w3.org/TR/WCAG20-TECHS/G1.html) (W3)

### **Do’s and Don’ts**

#### **Do’s**

* Limit main navigation to 4-6 links for easy scanning of website topics. No more than 7 links maximum.
* Avoid acronyms, abbreviation, institutional or technical jargon if it is not widely known by site visitors.
* Stick to broad topics or categories.

#### **Don'ts**

* Don't link to individual reports, articles, events, or people. Use Banners and Cards to highlight editorial content, events, and important people.
* Don't link to external websites.
* Don't link to non-web formats like PDF, DOC, etc. These formats do not comply with federal accessibility guidelines by default.

### **Desktop Anatomy**

<img class="doc-images" alt="Header and Main Menus Desktop Anatomy Image" title="Header and Main Menus Desktop Anatomy Image" src="/build/docs/img/Header/header-desktop-anatomy.jpg"/>

1. Global Header (required): Global header includes the UCLA logo and institutional breadcrumb.
2. UCLA Logo (required): UCLA logo links back to ucla.edu.
3. Institutional Breadcrumb (required): Institutional breadcrumbs are used for academic entities to provide links back to the college, school, or department which the entity falls under.
4. Site Header (required): Site header includes entity name and navigation.
5. Entity Name (required): Entity name links back to homepage for site.
6. Primary Navigation Items (required): Primary Navigation Items link to the main sections of the site. They can be a link to a section landing page or included a dropdown or subpage links.
7. Secondary Navigation Items (optional): Secondary Navigational Items callout specific pages that are not within main sections of the site. Limit of 3 items.
8. Secondary Emphasized Navigation Item (optional): A Secondary Navigation Item can be given emphasis with this style. Limit this style to one item.
9. Search (required): Search navigation item launches the site search function.
10. Dropdown Menu (optional): Dropdown menu is used to give access to tier 2 pages.

### **Desktop Variations**

<img class="doc-images" alt="Header and Main Menus Desktop Variations Image" title="Header and Main Menus Desktop Variations Image" src="/build/docs/img/Header/header-desktop-states.jpg"/>

### **Desktop Specs**

<img class="doc-images" alt="Header and Main Menus Desktop Specs Image" title="Header and Main Menus Desktop Specs Image" src="/build/docs/img/Header/header-desktop-specs.jpg"/>

### **Mobile Anatomy**

<img class="doc-images" alt="Header and Main Menus Mobile Anatomy Image" title="Header and Main Menus Mobile Anatomy Image" src="/build/docs/img/Header/header-mobile-anatomy.jpg"/>

1. Global Header (required): Global header includes the UCLA logo and institutional breadcrumb.
2. UCLA Logo (required): UCLA logo links back to ucla.edu
3. Institutional Breadcrumb (required): Institutional breadcrumbs are used for academic entities to provide links back to the college, school, or department which the entity falls under.
4. Site Header (required): Site header includes entity name and navigation.
5. Entity Name (required): Entity name links back to homepage for site.
6. Primary Navigation Items (required): Primary Navigation Items link to the main sections of the site. They can be a link to a section landing page or included a dropdown or subpage links.
7. Search (required): Search field for searching site.
8. Tier 1 Navigation Item: Tier 1 navigation Items link to the main sections of the site.
9. Tier 1 Dropdown Item: Tier 2 dropdown item reveals tier 2 navigational items.
10. Tier 2 Navigation Item: Tier 2 navigation Items link to the subsections of a main section of the site.
11. Tier 2 Dropdown Item: Tier 2 dropdown item reveals tier 3 navigational items.
12. Tier 3 Navigation Item: Tier 2 navigation Items link to the subsections of a sub section of the site.



### **Mobile States**

<img class="doc-images" alt="Header and Main Menus Mobile States Image" title="Header and Main Menus Mobile States Image" src="/build/docs/img/Header/header-mobile-states.jpg"/>

### **Mobile Specs**

<img class="doc-images" alt="Header and Main Menus Mobile Specs Image" title="Header and Main Menus Mobile Specs Image" src="/build/docs/img/Header/header-mobile-specs.jpg"/>

### **Code**

```
<header id="header">

    <div class="header-logo">
        <div class="header-logo__wrap">
            <a href="https://www.ucla.edu/">
                <img class="header-logo__image" src="/img/icons/ucla_logo_white.svg" alt="UCLA Logo" />
            </a>

            <ul class="breadcrumb breadcrumb--white">
                <li class="breadcrumb__item">
                    <a href="#">College</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#">School</a>
                </li>
            </ul>
        </div>
    </div>

    <div class="header-wrap clearfix">
        <div class="site-name clearfix">
            <a href="#" title="Department Name" rel="home">Department Name</a>
        </div>

        <div id="menu-secondary">
            <div id="nav-second" class="nav-secondary" aria-label="Secondary Menu">
                <ul class="nav-secondary__list">
                    <li class="nav-secondary__item">
                        <a class="nav-secondary__link" href="#">Nav Item</a>
                    </li>
                    <li class="nav-secondary__item">
                        <a class="nav-secondary__link" href="#">Nav Item</a>
                    </li>
                    <li class="nav-secondary__item">
                        <a class="nav-secondary__link nav-secondary__link--active" href="#">Nav Item</a>
                    </li>
                </ul>
            </div>
        </div>

        <nav id="menu">
            <button id="primary-ham" class="hamburger" type="button" aria-label="Menu" aria-controls="navigation" alt="navigation and search">
                <span class="hamburger__box">
                    <span class="hamburger__inner"></span>
                </span>
            </button>

            <nav id="nav-main" class="nav-primary" aria-label="Main Menu">
                <ul class="nav-primary__list">
                    <li>
                        <div class="nav-primary__search-mobile">
                            <form role="search" method="get" class="nav-primary__search-form" action="#" id="menu-search-mobile">
                                <label>
                                    <span class="nav-primary__screen-reader-text visuallyhidden">Search for:</span>
                                    <input type="search" class="nav-primary__search-field" placeholder="Search …" value="" name="s">
                                </label>
                                <input type="submit" class="nav-primary__search-submit" value="Search">
                            </form>
                        </div>
                    </li>
                    <li class="nav-primary__item nav-primary__link--has-children" aria-expanded="false">
                        <a class="nav-primary__link nav-primary__link--current-page" aria-label="Press the down arrow to open dropdown" href="#">Nav Item</a>
                        <button class="nav-primary__toggle" aria-label="toggle"></button>
                        <ul class="nav-primary__sublist nav-primary__sublist--hidden">
                            <li class="nav-primary__item">
                                <a class="nav-primary__link" href="#">Nav Item</a>
                            </li>
                            <li class="nav-primary__item">
                                <a class="nav-primary__link nav-primary__link--current-page" href="#">Nav Item</a>
                            </li>
                            <li class="nav-primary__item">
                                <a class="nav-primary__link" href="#">Nav Item</a>
                            </li>
                            <li class="nav-primary__item">
                                <a class="nav-primary__link" href="#">Nav Item</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-primary__item nav-primary__link--has-children" aria-expanded="false">
                        <a class="nav-primary__link" aria-label="Press the down arrow to open dropdown" href="#">Nav Item</a>
                        <button class="nav-primary__toggle" aria-label="toggle"></button>
                        <ul class="nav-primary__sublist nav-primary__sublist--hidden">
                            <li class="nav-primary__item">
                                <a class="nav-primary__link" href="#">Nav Item</a>
                            </li>
                            <li class="nav-primary__item">
                                <a class="nav-primary__link" href="#">Nav Item</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-primary__item nav-primary__link--has-children" aria-expanded="false">
                        <a class="nav-primary__link" aria-label="Press the down arrow to open dropdown" href="#">Nav Item</a>
                        <button class="nav-primary__toggle" aria-label="toggle"></button>
                        <ul class="nav-primary__sublist nav-primary__sublist--hidden">
                            <li class="nav-primary__item">
                                <a class="nav-primary__link" href="#">Nav Item</a>
                            </li>
                            <li class="nav-primary__item">
                                <a class="nav-primary__link" href="#">Nav Item</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-primary__item nav-primary__link--has-children" aria-expanded="false">
                        <a class="nav-primary__link" aria-label="Press the down arrow to open dropdown" href="#">Nav Item</a>
                        <button class="nav-primary__toggle" aria-label="toggle"></button>
                        <ul class="nav-primary__sublist nav-primary__sublist--hidden">
                            <li class="nav-primary__item">
                                <a class="nav-primary__link" href="#">Nav Item</a>
                            </li>
                            <li class="nav-primary__item">
                                <a class="nav-primary__link" href="#">Nav Item</a>
                            </li>
                            <li class="nav-primary__item">
                                <a class="nav-primary__link" href="#">Nav Item</a>
                            </li>
                            <li class="nav-primary__item">
                                <a class="nav-primary__link" href="#">Nav Item</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-primary__item ">
                        <a class="nav-primary__link" href="#">Nav Item</a>
                    </li>
                    <li class="nav-primary__item nav-primary__link--has-children" aria-expanded="false">
                        <a class="nav-primary__link" aria-label="Press the down arrow to open dropdown" href="#">Nav Item</a>
                        <button class="nav-primary__toggle" aria-label="toggle"></button>
                        <ul class="nav-primary__sublist nav-primary__sublist--hidden">
                            <li class="nav-primary__item">
                                <a class="nav-primary__link" href="#">Nav Item</a>
                            </li>
                            <li class="nav-primary__item">
                                <a class="nav-primary__link" href="#">Nav Item</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div class="nav-primary__search-desktop">
                            <button id="search-button" class="nav-primary__search-desktop-button">
                                <svg role="img" aria-label="Search Icon" class="nav-primary__search-icon" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <title>Search Icon</title>
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g transform="translate(-15.000000, -15.000000)">
                                            <g id="Nav-Item">
                                                <g transform="translate(12.000000, 12.000000)">
                                                    <polygon class="Path-polygon" points="0 0 24 0 24 24 0 24"></polygon>
                                                    <path d="M15.5,14 L14.71,14 L14.43,13.73 C15.41,12.59 16,11.11 16,9.5 C16,5.91 13.09,3 9.5,3 C5.91,3 3,5.91 3,9.5 C3,13.09 5.91,16 9.5,16 C11.11,16 12.59,15.41 13.73,14.43 L14,14.71 L14,15.5 L19,20.49 L20.49,19 L15.5,14 Z M9.5,14 C7.01,14 5,11.99 5,9.5 C5,7.01 7.01,5 9.5,5 C11.99,5 14,7.01 14,9.5 C14,11.99 11.99,14 9.5,14 Z" fill="#00598C" fill-rule="evenodd"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </button>

                            <div class="nav-primary__search-block-form search-mobile" data-drupal-selector="search-block-form" id="block-search" role="search">

                                <form role="search" method="get" class="nav-primary__search-form" action="#" id="menu-search-desktop">
                                    <label>
                                        <span class="nav-primary__screen-reader-text visuallyhidden">Search for:</span>
                                        <input type="search" class="nav-primary__search-field" placeholder="Search …" value="" name="s">
                                    </label>
                                    <input type="submit" class="nav-primary__search-submit" value="Search">
                                </form>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </nav>
    </div>
</header>
```

<!--Headers and Main Menus code here, if applicable-->

## **Breadcrumbs**

Breadcrumbs provide an important method of navigating the site. They may feel redundant if your site structure and menus are relatively simple, but they have multiple benefits and require minimal space. We recommend any website with 3 or more levels of page hierarchy (e.g. Home / Academics / Undergraduate) implement breadcrumbs and the wayfinding abilities they provide.

Most visitors will find your site via search engines. If searching for a topic more specific than your program alone, they will likely bypass your homepage to an internal sub-page of your site. Letting visitors know where they entered, and how to navigate upwards to broaden their search, will encourage them to stick around and search for related content.

### **Anatomy**

<img class="doc-images" alt="Breadcrumbs Anatomy Image" title="Breadcrumbs Anatomy Image" src="/build/docs/img/Breadcrumbs/breadcrumbs-anatomy.jpg"/>

1. Breadcrumb Label (required)
2. Item Divider (required)
3. Container (on hover state only)


### **States & Variations**

<img class="doc-images" alt="Breadcrumbs States & Variations Image" title="Breadcrumbs States & Variations Image" src="/build/docs/img/Breadcrumbs/breadcrumbs-states.jpg"/>

### **Specs**

<img class="doc-images" alt="Breadcrumbs Specs Image" title="Breadcrumbs Specs Image" src="/build/docs/img/Breadcrumbs/breadcrumb-specs.jpg"/>

### **Mobile Behavior**

<img class="doc-images" alt="Breadcrumbs Mobile Behavior Image" title="Breadcrumbs Mobile Behavior Image" src="/build/docs/img/Breadcrumbs/breadcrumb-mobile-behavior.jpg"/>

### **Code**

<!--Breadcrumbs code here, if applicable-->
```
{{view '@navigation--breadcrumb'}}
```

## **Side Menus**

### **Anatomy**

<img class="doc-images" alt="Side Menus Anatomy Image" title="Side Menus Anatomy Image" src="/build/docs/img/Side_Nav/sidenav-anatomy.jpg"/>

1. Nav Item Label (required)
2. Container (required)
3. Active tab indicator (required)

### **States**

<img class="doc-images" alt="Side Menus States Image" title="Side Menus States Image" src="/build/docs/img/Side_Nav/sidenav-states.jpg"/>

### **Variations**

<img class="doc-images" alt="Side Menus Variations Image" title="Side Menus Variations Image" src="/build/docs/img/Side_Nav/sidenav-variations.jpg"/>

### **Specs**

<img class="doc-images" alt="Side Menus Specs Image" title="Side Menus Specs Image" src="/build/docs/img/Side_Nav/sidenav-specs.jpg"/>

### **Code**
<!--Side Menus code here, if applicable-->
