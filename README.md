# UCLA FRACTAL Components Library

This components library is currently in development and is not meant for use in production sites.

**Read the Fractal documentation at http://fractal.build/guide.**

## Getting started

Clone repository and run `npm install`


Run and watch locally
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
