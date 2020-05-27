# UCLA FRACTAL Components Library

## This readme is for Developers and the Governance team.

This components library was built on the Fractal technology and is continually in development.

**Read the Fractal documentation at http://fractal.build/guide.**

## Getting started

Clone repository and run `npm install`


Run and watch locally
```
gulp watch
```
Site will be viewable at http://localhost:3000


Generate Assets with compiles css and javascript.
```
gulp build
```

Generate Assets with Compiled CSS, javascript, and images.
```
gulp production
```

## Branch / Bucket Information (BETA)

The "beta" branch is deployed at https://beta-ucla-fractal.s3-us-west-1.amazonaws.com/build/index.html, while "beta-development" branch is deployed at https://beta-development-ucla-fractal.s3-us-west-1.amazonaws.com/build/index.html

DURING BETA:

1. "beta" - This will act as the "production" branch. Updates from the "beta-development" branch should be merged into this branch. This will trigger the deployment pipeline to deploy to the "beta" S3 bucket.

1. "beta-development" - This will act as the "development" branch. Updates from the "beta-updates" branch should be merged into this branch. This will trigger the deployment pipeline to the "beta-development" S3 bucket. Semantic versioning will be upgraded during pipeline build.

1. "beta-updates" - Developers should create their branch based off of this branch and merge to this branch when making updates. Once satisfied, reviewers should merge this branch into "beta-development". This branch is necessary so that we aren't upgrading version numbers for every single update made by contributors (i.e upgrading version number once per sprint release vs. upgrading version number for each update made during a sprint).

## Semantic Versioning Automation (BETA)

Semantic Versioning is automated with the [semantic-release](https://github.com/semantic-release/semantic-release) library. This library will check the project's commit messages during the pipeline build to upgrade version numbers accordingly.

A quick overview of the current flow for BETA is as follows:

1. Developer creates a branch from "beta"
1. Following the "Contributing Flow", the developer makes changes, commits and push changes to the "beta-updates" branch
1. PR is reviewed and merged
1. Merging from "beta-updates" to "beta-development" will trigger the deployment pipeline to the ["beta-development" S3 bucket](https://s3.console.aws.amazon.com/s3/buckets/beta-development-ucla-fractal/public/?region=us-west-1&tab=overview) (Beta Development Environment)
1. During the pipeline build, semantic release is called and upgrades version number accordingly
1. When development updates are ready to be deployed, the "beta-development" branch should be merged into "beta" branch. This will trigger the deployment pipeline to the ["beta" S3 bucket](https://s3.console.aws.amazon.com/s3/buckets/beta-ucla-fractal/public/?region=us-west-1&tab=overview) (Beta Production Environment)

## Contributing Flow (BETA)

When making updates during the beta phase, please create a branch from the "beta" branch.

To commit:

1. `git add .`
1. `npm run commit`  <!-- Answer questions to generate commit message -->
1. `git push`

## Component Status Types

- Ready - Component is ready for production sites
- Prototype - Component is in review
- wip - Default status "Work In Progress"

More on status can be found here, https://fractal.build/guide/core-concepts/statuses.html#default-statuses.

## To install via NPM

This repository is currently private and requires an ssh key to install via NPM. To create a bitbucket ssh key follow these instructions, https://confluence.atlassian.com/bitbucket/set-up-an-ssh-key-728138079.html

After the ssh has been created run the following command:

```
npm install ssh://bitbucket.org/uclaucomm/ucla-bruin-components.git --save
```

## Add to documentation

This library is documented in the docs folder of this repository. The markdown pages follow github markdown rules.

[More on Github Markdown]https://guides.github.com/features/mastering-markdown/
