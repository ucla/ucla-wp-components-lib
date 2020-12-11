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
