---
title: Contributing Documentation
---
This site is the official library for UCLA branded components and documentation on how to use them. As a proactive UCLA web community, we are always striving to improve and expand our library, with a governance process for reviewing contributed components. Anyone may contribute a component to the UCLA Web Component Library.

In this documentation we keep track of [status types](/). If you’re familiar with open source projects then you will be familiar with this process. If not, please follow our principles and process closely and with a little bit of practice, you will learn to contribute and carry this knowledge into other projects. To join the discussion on what’s needed, please head to our forum.

These components are to be used on official university websites and applications.

# **Contributing**

## **Core Principles**

**Problem-Solving**

We anticipate that there will likely be use cases we haven’t come across yet. We appreciate contributions based on current user and developer needs and insights into future needs.

**Flexibility**

Embrace the unknowns. Design and develop with flexibility in mind. Done is better than perfect.

**Accessibility**

ADA compliance is required legally, and as a trusted educational institute, it is our responsibility to uphold accessibility standards. All branches must first pass an ADA compliance assessment before being merged into the master branch.

## **The Process**

**Step One**

See which issues currently need to be resolved. Please review our [issue board](https://bitbucket.org/uclaucomm/ucla-bruin-components/src/master/). We use Bitbucket for our repository.

**Step Two**

Create your issue branch on the [development repository](https://bitbucket.org/uclaucomm/ucla-bruin-components/src/master/).

**Step Three**

Code! Make sure to follow the principles of our contributing guidelines listed above.

**Step Four**

Write the documentation for your component. Use either Component Documentation [Template 1](https://docs.google.com/document/d/1ZTx27t_yjLnQ4HxEh5SuEyjEMzJ-OzgjxwrcqSpLlxM/edit) (used for [Tables](/build/docs/component-guidelines/tables.html)) or [Template 2](https://docs.google.com/document/d/1skG3eTt6nktdypZFRUwMFJThjb5jEzVAgMjNJX5A1ks/edit) (used for [Buttons](/build/docs/component-guidelines/button.html)).

**Step Five**

Once your code is ready for approval, you can create a pull request for your branch to be merged into the master repository. Our UCLA Web Components Library governance team will review your request and provide you with feedback. It is important to work with our governance team and follow the principles. Our governance team will test your component on all major web browsers and devices. Most pull requests will not get accepted on your first try, but we strongly encourage you to implement the feedback notes and try again!

## **Pull Request Review**

Pull requests are reviewed the *TBD* of every month.

**Strategic Communications**

Strategic Communications is the steward and approver of the UCLA mark in marketing and advertising over delegated UCLA domains. For more information see policy 110 or contact Strategic Communications.

Strategic Communications will review each component before it is approved for “[Ready](/)” status. Each component must be on brand and follow the [UCLA brand guidelines](http://brand.ucla.edu/). The component submitter is responsible for supplying documentation on its use. Undocumented components will not be approved.

Strategic Communications will provide feedback if a component was not approved for use based on UCLA brand guidelines.

**OIT/DCP**

OIT/DCP is the official campus ADA compliance coordinator, and a component must pass the OIT/DCP’s assessment for accessibility before it is approved and passed to the “Ready” status.

OIT/DCP will provide feedback if a component was not approved for use based on UCLA compliance guidelines.


## Get Started with the Repository
Visit the repository at the Strategic Communications Bitbucket: https://bitbucket.org/uclaucomm/ucla-bruin-components/src/master/

This library was built on [Fractal](https:/fractal.build).

Clone repository and run `npm install`

Additional steps may be required to install gulp.

Once installed locally, use terminal to run the website and watch the code. The linters should be reading error free.
```
gulp watch
```
Site will be viewable at http://localhost:3000


Generate Local Assets
```
gulp build
```

Generate Production Assets
```
gulp production
```
