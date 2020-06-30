
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

The "main" branch is deployed at the S3 bucket [here](https://s3.console.aws.amazon.com/s3/buckets/webcomponents.ucla.edu/?region=us-west-1), while "development" branch is deployed [here](https://s3.console.aws.amazon.com/s3/buckets/dev-webcomponents.ucla.edu/?region=us-west-1)

DURING BETA:

1. "main" - This is the "production" branch. Approved releases from the "development" branch should be merged into this branch. Changes in this branch triggers the pipeline to deploy to the "webcomponents.ucla.edu" S3 bucket. Campus partners/developers should create their branch based off of this since this branch will include the most up-to-date reviewed updates.

1. "development" - This is the "development" branch. Approved releases from the "campus" branch should be merged into this branch. This will trigger the deployment pipeline to the "dev-webcomponents.ucla.edu" S3 bucket.

1. "campus" - Campus partners/developers should send a PR for their updates into this branch. Once approved, reviewers should merge this branch into "development" branch.

## Semantic Versioning Automation (BETA)

Semantic Versioning is automated with the [semantic-release](https://github.com/semantic-release/semantic-release) library. This library will check the project's commit messages during the pipeline build to upgrade version numbers accordingly.

## Contributing Flow (BETA)

1. Developer creates a branch from "main" branch
1. Following the "Contributing Flow", the campus partner/developer makes changes, commits and push changes to the "campus" branch (regular `git add`, `git commit -m` and `git push` flow should be used)
1. PR is reviewed, tags are checked, and branch is merged into "campus" branch
1. On development release day (schedule TBA), reviewers will release the updates from "campus" branch by merging the branch to "development"
1. On production release day (schedule TBA), reviewers will release the updates from "development" branch by merging the branch to "main" (`npm run commit` workflow should be used).

## Reviewer Notes

When merging approved updates from "development" branch to "main" branch, please follow the following commiting flow:

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
