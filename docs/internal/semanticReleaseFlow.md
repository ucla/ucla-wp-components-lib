## Semantic Versioning Automation (BETA)

Semantic Versioning is automated with the [semantic-release](https://github.com/semantic-release/semantic-release) library. This library will check the project's commit messages during the pipeline build to upgrade version numbers accordingly. INTERNAL STRATCOMM developers will be responsible for merging changes from the "campus" branch and running the script to execute the semantic-release library's commit message. This is required to be executed before merging to "development" so that the project can be properly upgraded.

## What the Flow Will Look Like

1. Contributor creates a branch from the "campus" branch
1. Contributor adds and pushes changes to the remote server
1. Contributor sends a PR to merge their branch to the campus branch
1. Once approved, the PR will be merged into "semantic-check" branch
1. Internal SC Developer analyzes all commits on the "semantic-check" branch and runs the `npm run commit` script
1. Internal SC Developer answers the questions (See Commit Message Automation Questions Section)
1. Internal SC Developer pushes changes to remote server
1. Internal SC Developer creates a PR to merge "semantic-check" branch into "development"

## How to (BETA)

Semantic Versioning Automation requires commit messages to follow "Angular" commit messages. Be sure to run `npm install` to install the semantic-release plugin that will help auto generate this. Then follow the following commiting flow:

1. `git add <filename>` is not required prior to running `npm run commit` since the script is already added on the package.json script
1. Merge changes from "campus" branch into "semantic-check branch"
1. Run `npm run commit`
1. Push changes to the remote "semantic-check" branch

After the initial push, if additional changes are to committed and pushed for the same update, developers can just follow the regular `git add` and `git commit` flow (i.e skip the `npm run commit` flow).

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

 - [Go Back to Main README](https://bitbucket.org/uclaucomm/ucla-bruin-components/src/campus/)
