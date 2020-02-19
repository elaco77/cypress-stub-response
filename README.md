# Cypress stub simple example

## What is the use of this Repo

This repo is showing how Cypress is stubbing xhr request response.

## Prerequisites

### Install Node JS
To check if you already have Node JS please run this in your Terminal

```bash
node -v
```

If you don't have it, please refer to https://nodejs.org/en/ to install Node JS

### Yarn package manager
To check if you already have Yarn please run this in your Terminal

```bash
yarn -v
```

If you don't have it, please refer to https://classic.yarnpkg.com/en/docs/install/#mac-stable to install Yarn

## Cloning and Running the test

Clone the repository on your machine. Open the terminal and navigate to the root folder of the repository (ie. /Users/john/cypress-stub-response).

To install all the npm packages (including Cypress), type the following command in the Terminal

```bash
yarn
```

After you see the node_modules folder, you can run Cypress.

In order to see the test in action, run this command

```bash
yarn cypress:open
```

This will open Cypress runner UI and you can click on the `stub_response.spec.js` in order to run it.