# UCLA Web Components Library

## This README is for Developers and the Governance team.

This components library was built on the Fractal technology and is continually in development.

**Read the Fractal documentation at [http://fractal.build/guide](http://fractal.build/guide).**

## Getting started

1. Clone respository and run `npm install`
1. Run `gulp build`
1. Run `gulp watch`
1. Navigate to [http://localhost:3000](http://localhost:3000m)

## Gulp Tasks

| Task | Description |
|-|-|
| build | Build Fractal framework, build expanded styling and scripts for both documentation and components library, and remove string filters (used for production versioning) |
| watch | Start Fractal development web server, watch for styling and script changes for both the documentation and components library, and run linters for both the documentation and components library |
| *production | Build Fractal framework and build compressed styling and scripts for both documentation and components library |
| *addImageFilterStrs | Add filter string for images |

 *used in production builds and should only be used locally to test behaviors expected in production

## Bucket + Cloud(S3) URLs (BETA)

| Branch | Cloud URL | S3 Bucket URL |
|-|-|-|
| main | https://webcomponents.ucla.edu | https://s3.console.aws.amazon.com/s3/buckets/webcomponents.ucla.edu/?region=us-west-1 |
| development | http://dev-webcomponents-ucla-edu.s3-website-us-west-1.amazonaws.com | https://s3.console.aws.amazon.com/s3/buckets/dev-webcomponents-ucla-edu/?region=us-west-1 |
| campus | not setup | not setup |

## Branch Info (BETA)

DURING BETA:

1. "main" - This is the "production" branch. Approved releases from the "development" branch should be merged into this branch. Changes in this branch triggers the pipeline to deploy to the "webcomponents.ucla.edu" S3 bucket.

1. "development" - This is the "development" branch. Approved releases from the "campus" branch should be merged into this branch. This will trigger the deployment pipeline to the "dev-webcomponents.ucla.edu" S3 bucket.

1. "campus" - Campus partners/developers should create their update branches and send PRs for their updates to merge into this branch. Once approved, reviewers should merge this branch into "development" branch.

## CDN Distribution and Invalidation Information (BETA)
* This project's documentation and component public library in production environment is deployed behind Cloudfront CDN. To see updates instantly after updates have been to production, you must manually invalidate the files. See the distribution page for the documentation [here](https://console.aws.amazon.com/cloudfront/home?region=us-west-1#distribution-settings:E3BKWM01VHPJ5I) or for the public library [here](https://console.aws.amazon.com/cloudfront/home?region=us-west-1#distribution-settings:EUU3JRBWPI1HQ). For more on "how to invalidate" see the AWS docs [here](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html).
* A CDN distribution and DNS configuration have not been configured for the development environment public library. That means the URLs to the public library shown in the "Download" page in development will not work. To view the public styles and scripts, please navigate to the URL in the [S3 bucket](https://s3.console.aws.amazon.com/s3/buckets/dev-webcomponents-ucla-edu/public/?region=us-west-1&tab=overview). The path looks similar to this - http://dev-webcomponents-ucla-edu.s3-us-west-1.amazonaws.com/public/x.x.x/css/ucla-lib.min.css

## Directory Hierarchy

Documentation includes usage of Markdown files. Click here to see [more on Github Markdown](https://guides.github.com/features/mastering-markdown/).

```
/
├─ build # Static Website Output
├─ public # Library Styles
└─ src/ # Source Code
   ├─ components/    # Components Code
   │    ├─ xx-components/  # contains markdown files that renders the component views
   │    ├─ img/  # contains icon images
   ├─ docs/      # Documentation Code
   │  ├─ xx-documentation/  # contains markdown files that renders the documentation
   │  ├─ img/ # contains images used for documentations (i.e spec and states images)
   │  ├─ js/  # JS scripts for documentation
   │  └─ scss # Stylesheets
   ├─ js/  # JS scripts for components
   └─ scss/  # Stylesheets for components
      ├─ components/ # Component stylesheets
      └─ utilities/ # Utilities stylesheets
```
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
7. (If "Yes" from #5) Describe the breaking changes - (If any) Include more details on what will break from this commit
8. Does this change affect any open issues? - Yes, if this change was assigned through a JIRA ticket (StratComm Team) or change is to fix an issue from our issue board
9. (If "Yes" from #8) Add issue references - Include JIRA ticket number or link to issue board

## Component Status Types


- Ready - Component is ready for production sites
- Prototype - Component is in review
- wip - Default status "Work In Progress"

More on status can be found [here](https://fractal.build/guide/core-concepts/statuses.html#default-statuses).
