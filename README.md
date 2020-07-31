# UCLA Web Components Library

## This README is for Developers and the Governance team.

This components library was built on the Fractal technology and is continually in development.

**Read the Fractal documentation at http://fractal.build/guide.**

## Getting started

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

 *used in production builds and should only be used locally to test behaviors expected in production

## Branch / Bucket Information (BETA)

The "main" branch is deployed at the S3 bucket [here](https://s3.console.aws.amazon.com/s3/buckets/webcomponents.ucla.edu/?region=us-west-1), while "development" branch is deployed at the S3 bucket [here](https://s3.console.aws.amazon.com/s3/buckets/dev-webcomponents.ucla.edu/?region=us-west-1)

DURING BETA:

1. "main" - This is the "production" branch. Approved releases from the "development" branch should be merged into this branch. Changes in this branch triggers the pipeline to deploy to the "webcomponents.ucla.edu" S3 bucket.

1. "development" - This is the "development" branch. Approved releases from the "campus" branch should be merged into this branch. This will trigger the deployment pipeline to the "dev-webcomponents.ucla.edu" S3 bucket.

1. "campus" - Campus partners/developers should create their update branches and send PRs for their updates to merge into this branch. Once approved, reviewers should merge this branch into "development" branch.

## Contributing Flow (BETA)

1. Developer creates a branch based off of the "campus" branch
1. Following the "Contributing Flow", the campus partner/developer makes changes, commits and push changes to the "campus" branch. (Please use the "Commit Message Automation Flow" below)
1. PR is reviewed, tags are checked, and branch is merged into "campus" branch
1. On development release day (schedule TBA), reviewers will release the updates from "campus" branch by merging the branch to "development"
1. On production release day (schedule TBA), reviewers will release the updates from "development" branch by merging the branch to "main".

## Semantic Versioning Automation (BETA)

Semantic Versioning is automated with the [semantic-release](https://github.com/semantic-release/semantic-release) library. This library will check the project's commit messages during the pipeline build to upgrade version numbers accordingly.

## Commit Message Automation Flow (BETA)

Semantic Versioning Automation requires commit messages to follow "Angular" commit messages. Be sure to run `npm install` to install the semantic-release plugin that will help auto generate this. Then follow the following commiting flow:

1. `git add <filenames or all>`
1. `npm run commit`  <!-- Answer questions to generate Angular commit message -->
1. `git push`

After the initial push, if additional work is to committed and pushed from the same branch, contributers can just follow the regular `git add` and `git commit` flow.

## Commit Message Automation Questions (BETA)

When running `npm run commit`, a prompt with the below questions will appear in the command line to create a commit message in "Angular" style.

1. Select the type of change that you're committing - Choose the option that best describes your changes
2. What is the scope of this change - Include the filename(s), component name(s), or documentation name(s) being changed
3. Write a short, imperative tense description of the change - Include a short brief of changes being made
4. Provide a longer description of the change - (if any) Include more details of changes made
5. Are there any breaking changes? - Yes, if this update will break usage of the library previous to this update
6. (If "Yes" from #5) A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself - Include details on what will break from this commit
7. If "Yes" from #5) Describe the breaking changes - (If any) Include more details on what will break from this commit
8. Does this change affect any open issues? - Yes, if this change was assigned through a JIRA ticket (StratComm Team) or change is to fix an issue from our issue board
9. (If "Yes" from #8) Add issue references - Include JIRA ticket number or link to issue board

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
