# Learn How To Contribute

---

## Table of Contents

* [Ways to contribute](#markdown-header-ways-to-contribute)
* [Dev Workflow](#markdown-header-dev-workflow)

---

# Ways to contribute

These are the main ways to contribute to this project:
- opening an issue
- proposing a new feature idea or enhancement
- writing documentation
- fixing bugs

For more information, visit [Code Contributions documentation](/src/docs/03-contribute/02-code-contributions.md) on the Fractal website.

---

# Dev Workflow

1. If you haven't done so already, start by [setting up your local environment](./getSetup.md).

2. [Branch off](https://www.atlassian.com/git/tutorials/using-branches) of the `campus` branch to make sure you have the latest updates.

  - Prefix your branch name with `"CL-"` and the corresponding issue number. e.g. If you are working on **issue #30 Accordion bug**, name your branch "**CL-30-accordion-bug**”.

  ```
  git checkout -b CL-{{issue number}}-{{new branch name}}
  ```

3. All edits should be made in the ***/src/*** folder. See more information about the [project directory](https://bitbucket.org/uclaucomm/ucla-bruin-components/src/097010051868ed04991987cea2815af2768be999/docs/contributors/projectHierarchy.md).

4. After making your changes locally, [commit your changes]((https://www.atlassian.com/git/tutorials/saving-changes/git-commit) so others have a log of your updates. Please be sure to add a commit message that will clearly underline the changes being made.

  ```
  git commit -am "{{description of your updates}}"
  ```

5. [Push your new branch](https://www.atlassian.com/git/tutorials/syncing/git-push) to the remote repository.

  ```
  git push --set-upstream origin CL-{{issue number}}-{{new branch name}}
  ```

6. If you've already pushed your current branch, you might just need to push your changes.

  ```
  git push
  ```

7. When you have completed your work, submit a [pull request (PR)](https://bitbucket.org/uclaucomm/ucla-bruin-components/pull-requests/new) and set the destination branch to `campus` Be descriptive in your answers. The review process will begin and feedback (if any) will be added to the pull request.
  - Review ["Making a Pull Request” tutorial](https://www.atlassian.com/git/tutorials/making-a-pull-request) if needed.


---

:arrow_left: [Go Back to Main README](https://bitbucket.org/uclaucomm/ucla-bruin-components/src/campus/)
