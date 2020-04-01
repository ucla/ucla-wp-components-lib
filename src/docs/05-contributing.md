---
title: Contributing Documentation
---
We are a UCLA community with a governance process that can be learned about in the documentation site of this website. Our goal is to make it easier for teams to design and develop great experiences for users across all UCLA applications. You do not have to be a developer to contribute. To join the discussion on what is needed please head to our forum. The below documentation is for developers and code contributors.

This site is a preview of the Bruin Components source. It's where we develop new features and components that are not always stable. This is where we keep track of it. If you're familiar with open source projects than contributing then you will be very familiar with this process. If not, please follow our principles and process closely and with a little bit of practice, you will learn to contribute and carry this knowledge into other open source projects.

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

**Pull Request Review**
Pull requests are reviewed the ****** of every month by the governance board in the UCLA zoom.

Zoom Link: https://ucla.zoom.us/0987asdf7a9s087df
Board President: Zac Efron
Visual Design Governor: Steve Smith
Developer Governor: Mike Smith
Ada Governor: John Smith
UX Governor: Patty Smith

## Get Started with the Repository
Visit the Repo at Strategic Communications BitBucket. https://bitbucket.org/uclaucomm/ucla-bruin-components/src/master/

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
