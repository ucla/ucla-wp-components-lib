---
title: Contributing Documentation
---
This site is the official library for UCLA branded components and documentation on how to use them. As a proactive UCLA web community, we are always striving to improve and expand our library, with a governance process for reviewing contributed components. Anyone may contribute a component to the UCLA Web Component Library.

In this documentation we keep track of [status types](/build/%!CurrentVersion%!/index.html). If you’re familiar with open source projects then you will be familiar with this process. If not, please follow our principles and process closely and with a little bit of practice, you will learn to contribute and carry this knowledge into other projects. To join the discussion on what’s needed, please head to our forum.

These components are to be used on official university websites and applications.

# **Contributing**

## **Core Principles**

**Problem-Solving**

We anticipate that there will likely be use cases we haven’t come across yet. We appreciate contributions based on current user and developer needs and insights into future needs.

**Flexibility**

Embrace the unknowns. Design and develop with flexibility in mind. Done is better than perfect.

**Accessibility**

ADA compliance is required legally, and as a trusted educational institute, it is our responsibility to uphold accessibility standards. All branches must first pass an ADA compliance assessment before being merged into the main branch.

## **The Process**

**Step One**

Create a new issue that you have found or see which issues currently need to be resolved. Please review our [open issues board](https://bitbucket.org/uclaucomm/ucla-bruin-components/issues?status=new&status=open). We use Bitbucket for our repository.

**Step Two**

We require UCLA Campus members to branch from the ["campus"](https://bitbucket.org/uclaucomm/ucla-bruin-components/src/campus/) branch on the repository. Please select if you are fixing a bug or creating a new feature that you would like to reviewed. We ask that you prefix your branch name with "CL-".

For a full understanding of the branches on this repository please see the root level readme file. For a more in depth look at branching on Bitbucket please see the [bitbucket support page](https://support.atlassian.com/bitbucket-cloud/docs/branch-a-repository/).

**Step Three**

Code! If this is your first time working in this repository, there is a [process for installing locally](https://bitbucket.org/uclaucomm/ucla-bruin-components/src/campus/). Expected knowledge of how to use NPM is required. Please read the root level readme for more information or scroll down and read the "Get started with the Repository" section below. All edits from campus should be made in the "src" folder. There are two questions you will be asked about the code when it comes time to make a pull request.

1. What does this code do?
2. Does the code require comments so others will understand its use?

**Step Four**

Since we are a community, we need to think about how others will be able to use or benefit from every addition to the library. There are two questions you will be asked about the documentation or benefit when it comes time to make a pull request.

1. Does this pull request require documentation for non-developers to use and is that documentation included?
2. How does this improve the build or community effort?

If your addition needs documentation, we have provided some templates to get you started. Please select the best fitting template for your addition that we have created.

[Template 1](https://docs.google.com/document/d/1ZTx27t_yjLnQ4HxEh5SuEyjEMzJ-OzgjxwrcqSpLlxM/edit) (used for [Tables](/build/%!CurrentVersion%!/docs/component-guidelines/tables.html))

[Template 2](https://docs.google.com/document/d/1skG3eTt6nktdypZFRUwMFJThjb5jEzVAgMjNJX5A1ks/edit) (used for [Buttons](/build/%!CurrentVersion%!/docs/component-guidelines/buttons-and-links.html))

**Step Five**

Once the above steps have been followed and considered, it is time to create a pull request that can be reviewed. Strategic Communications will review your request and provide you with feedback. After Strategic Communications has approved the PR, it will be passed on to the DCP and reviewed for ADA compliance. It is rare that pull requests get accepted on the first try, but we strongly encourage you to implement the feedback notes and try again! This collaboration is important to ensure this libraries success and ease of use for the community.

## **Pull Request Review**

Pull requests are reviewed every Wednesday at 1pm, in the order it was received. We do not guarantee your PR will be reviewed the Wednesday after it was submitted.

**What Strategic Communications Looks For**

Strategic Communications is the steward and approver of the UCLA mark in marketing and advertising over delegated UCLA domains. For more information see policy 110 or contact Strategic Communications.

Strategic Communications will review each component before it is approved for “[Ready](/build/%!CurrentVersion%!/index.html)” status. Each component must be on brand and follow the [UCLA brand guidelines](http://brand.ucla.edu/). The component submitter is responsible for supplying documentation on its use if needed. We will ask the following questions on your PR submission.

1. What does this code do?
2. Does the code require comments so others will understand its use?
3. Does this pull request require documentation for non-developers to use and is that documentation included?
4. How does this improve the build or community effort?

Strategic Communications will provide feedback if a component was not approved for use based on UCLA brand guidelines and needs of the community.

**What OIT/DCP Looks For**

OIT/DCP is the campus approved accessibility experts in WCAG compliance. For information on ADA compliance contact [ADA/504 compliance](https://www.ada.ucla.edu/).

OIT/DCP will provide feedback on why a component was not approved for use according to the WCAG 2.0 AA compliance guidelines.

## Get Started with the Repository
Visit the repository at the Strategic Communications Bitbucket: https://bitbucket.org/uclaucomm/ucla-bruin-components/src/master/

This library was built on [Fractal](https://fractal.build).

1. Clone respository and run `npm install`
1. Run `gulp build`
1. Run `gulp watch`
1. Navigate to http://localhost:3000

## Gulp Tasks

| Task | Description |
|-|-|
| build | Build Fractal framework, build expanded styling and scripts for both documentation and components library, and remove string filters (used for production versioning) |
| watch | Start Fractal development web server, watch for styling and script changes for both the documentation and components library, and run linters for both the documentation and components library |
| *production | Build Fractal framework and build compressed styling and scripts for both documentation and components library |
| *addImageFilterStrs | Add filter string for images |
