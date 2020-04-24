---
title: Contributing Documentation
---
We are a UCLA web community with a governance process that can be learned about in the documentation site of this website. Our goal is to make it easier for UCLA teams to design and develop great experiences for users across all UCLA applications. You do not have to be a developer to voice your opinion, but you will need some tech skill to contribute code. To join the discussion on what is needed please head to our forum. The below documentation is for developers and code contributors.

This site is a preview of the Bruin Components and how to use them. This is also where we develop new features and components. In this documentation we keep track of status [types](/docs/01-introduction/03-status-types.md). If you're familiar with open source projects then you will be very familiar with this process. If not, please follow our principles and process closely and with a little bit of practice, you will learn to contribute and carry this knowledge into other projects.

These component are to be used on official university websites.

## Contributing

### Principles

**Be clear.**

Make design decisions based on user needs. Design interfaces that help our users accomplish their goals quickly and easily.

**Be flexible.**

Our design system is for all types of IU applications, even ones that have yet to be imagined. We need to design and build for flexibility.

**Be productive.**

Done is better than perfect. Iteration is only half the battle. Testing with users could reveal issues or questions we didn’t anticipate.

**Be ADA Compliant.**

As an organization we need to be ADA compliant. All branches that are merged into the master branch must be ADA complaint.

### The Process

**Step One**

Find an issue to resolve an issue. Please review our issue board, [here](https://bitbucket.org/uclaucomm/ucla-bruin-components/src/master/), to find an issue that needs solving.

**Step Two**

Create your issue branch on the development repository [here](https://bitbucket.org/uclaucomm/ucla-bruin-components/src/master/).

**Step Three**

Code!! Make sure to follow the principles of our contributing guidelines listed above.

**Step Three**

Once your code follows the guidelines above you can create a pull request for you branch to be merged into the master repository. Out UCLA components library governance team will review and get back to you with feedback. Remember, most pull requests do not get accepted on first try and our governance team tests in all major web browsers and devices. It is important to work with our governance team and follow the principals.

### Pull Request Review

Pull requests are reviewed the ****** of every month.


**Strategic Communications**

Strategic Communications is the approver and delegator of UCLA mark in marketing and advertising over delegated UCLA domains. For more information see policy 110 or contact Gary Stevens for more information.

Strategic Communications will review each component be it is approved for "Ready" status. We will look to make sure each component is on brand and follows the UCLA brand guidelines. If a new component is submitted the submitter is responsible for supplying documentation on its use. Undocumented components will not be approved for use.

Strategic Communications will provide feedback on why a component was not approved for use according to the brand UCLA brand guidelines.


**OIT/DCPs**

OIT/DCP is the campus approved ada compliance coordinator and has approved each component with the status "Ready".

OIT/DCP will provide feedback on why a component was not approved for use according to the brand UCLA compliance guidelines.


## Get Started with the Repository
Visit the Repo at Strategic Communications BitBucket. https://bitbucket.org/uclaucomm/ucla-bruin-components/src/master/

This library was built on [Fractal](https:/fractal.build).

Clone repository and run `npm install`

Additional steps may be required to install gulp.

once installed locally use terminal to run the website and watch the code. The linters should be reading error free.
```
gulp fractalStart
```
Site will be viewable at http://localhost:3000


Generate Assets
```
gulp build
```

Generate Assets with Compiled CSS.
```
gulp production
```
