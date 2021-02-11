---
title: Code Contributions
---

## Working with the Repository

If this is your first time working with our repository, please read the [README markdown file](https://bitbucket.org/uclaucomm/ucla-bruin-components/src/campus/README.md) on the Bitbucket [campus](https://bitbucket.org/uclaucomm/ucla-bruin-components/src/campus/) branch for more information to install it locally.

## Status of Work

In this documentation, we use [status types](https://webcomponents.ucla.edu/build/%!CurrentVersion%!/index.html) to keep track of a component's progress. Please consider the progress of a component before submitting enhancements or proposals for related work.

## Opening an issue

If you're just getting started, one really helpful way to contribute is opening issues – whether it is noticing a typo, missing code sample, or a bug in a component.

  1. Navigate to the [Issue Tracker](https://bitbucket.org/uclaucomm/ucla-bruin-components/issues?status=new&status=open) on Bitbucket and make sure no one has opened the same issue.
  2. Click the "Create issue” button.
  3. Follow the example in the blue box and include necessary information:
      - Description of the issue
      - What needs to be done to fix the issue
      - If there is a bug, how to replicate the bug
  4. Select "Kind” and "Priority” types.
  5. If applicable, attach a screenshot of your issue.


## New feature idea or enhancement

You can share supporting work in any digital cloud-hosted format. This could include:
- Code snippets in an online code editor (CodePen, Gists, JSFiddle, etc.).
- Documentation in the form of cloud-hosted documents (Google Drive, Box, Evernote, etc.). You can suggest new content or edits to existing documentation.


## Writing documentation
Before any enhancement or new feature is incorporated, we'll need documentation to support it. There's a strong likelihood ***you*** will help write that documentation!

Since we are a community, we need to think about how others will use or benefit from the contents of our library.

The format of our documentation is undergoing changes, but we have [templates and existing documentation](https://webcomponents.ucla.edu/build/%!CurrentVersion%!/docs/component-guidelines/documentation-templates/component-documentation-template-1.html) you can reference. In general, we ask you to think about the following:

1. What does this feature do?
2. How should it be used? (usage rules, usability considerations)
3. What is required to make it accessible?

If your addition needs documentation, we have provided some templates to get you started. Please select the best fitting template for your addition that we have created.

[Template 1](https://docs.google.com/document/d/1ZTx27t_yjLnQ4HxEh5SuEyjEMzJ-OzgjxwrcqSpLlxM/edit) (used for [Tables](https://webcomponents.ucla.edu/build/%!CurrentVersion%!/docs/component-guidelines/tables.html))

[Template 2](https://docs.google.com/document/d/1skG3eTt6nktdypZFRUwMFJThjb5jEzVAgMjNJX5A1ks/edit) (used for [Buttons](https://webcomponents.ucla.edu/build/%!CurrentVersion%!/docs/component-guidelines/buttons-and-links.html))


## Submitting work

If you would like to work on an existing issue or bug, comment on the issue that you want to work on so other contributors know it’s being worked on. This process also applies to any documentation updates.

1. Branch off of the ***campus*** branch to make sure you have the latest updates
2. Prefix your branch name with "CL-" and the corresponding issue number. e.g. If you are working on **issue #30 Accordion bug**, name your branch "**CL-30-accordion-bug**”.
  - If you need a refresher on Git branching, please see this [tutorial on Atlassian](https://www.atlassian.com/git/tutorials/using-branches).
3. All edits should be made in the src folder. See more information about the [project directory](https://bitbucket.org/uclaucomm/ucla-bruin-components/src/097010051868ed04991987cea2815af2768be999/docs/contributors/projectHierarchy.md).
4. When you have completed your work, submit a [pull request (PR)](https://bitbucket.org/uclaucomm/ucla-bruin-components/pull-requests/new) and set the destination branch to ***campus***. Be descriptive in your answers.
  - Review ["Making a Pull Request” tutorial](https://www.atlassian.com/git/tutorials/making-a-pull-request) if needed.


## Pull Request Review & Approval

Strategic Communications is the steward and approver of the UCLA mark in marketing and advertising over delegated UCLA domains. For more information see [UCLA Policy 110](http://www.adminpolicies.ucla.edu/pdf/110.pdf) or contact Strategic Communications.

Pull requests are reviewed every Wednesday at 1 p.m., in the order it was received. We do not guarantee your PR will be reviewed the Wednesday after it was submitted.

We will ask the following questions on your PR submission.
- What does this code do?
- Does the code require comments so others will understand its use?
- Does this pull request require documentation for non-developers to use and is that documentation included?
- How does this improve the build or community effort?

Strategic Communications will review your PR and provide feedback if code was not approved for use based on UCLA brand guidelines and needs of the community.


## Reviewing for Accessibility
After Strategic Communications has approved the PR, it will be passed onto the [Disabilities and Computing Program (DCP)](https://dcp.ucla.edu/) and reviewed for ADA compliance. DCP is a campus partner specializing in making information accessible to all students, faculty, and staff. This includes making sure components and code follow [Web Content Accessibility Guidelines 2.0](https://www.w3.org/WAI/standards-guidelines/wcag/). This collaboration is important to ensure this library’s success and ease of use for the community.

For information on ADA compliance, contact the [ADA/504 Compliance Office](https://www.ada.ucla.edu/).
