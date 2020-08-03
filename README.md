# Pattern Matched React Template

> A Pattern Matched template for react web apps

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Install Yarn](https://yarnpkg.com/en/docs/install)

## :arrow_forward: Setup & run

- `git clone repo`
- `npm install`
- `npm start`

## :computer: Commands

- `npm start` start development server
- `npm build` clear /dist folder and fill it with a fresh build
- `node server.js` run /dist build code locally
- `npm deploy` build and deploy to test server
- `npm test` run all tests

## 📁 Project file structure

### Root files

- `copy.js` root internationalization copy object
- `index.html` root html file
- `index.js` code entry point, this is where everything begins
- `index.scss` root scss file, whenever you create a new .scss file import it here
- `reducers.js` root reducer
- `routes.js` all routes are in here
- `store.js` code that creates the redux store

### Modules

#### src/account

#### src/shared

### Module structure

##### src/{folder}/api

API related stuff. Majority of API calls are made directly within actions so most modules don't have this folder.

##### src/{folder}/assets

Images, videos etc.

##### src/{folder}/components

React components. File structure should generally follow account.

##### src/{folder}/copy

Internationalization copy goes here. Copy files are just plain JS objects so you can structure them whichever way you want. One file per language is fine.

##### src/{folder}/higher-order-components

React higher order components.

##### src/{folder}/lib

Internal libraries, helpers, utils etc.

##### src/{folder}/state

Actions, reducers, and to/from API resource transformations.

##### src/{folder}/static

Any kind of data that's defined client-side. For example color variables.

##### src/{folder}/styles

SCSS/LESS styles. File structure should generally follow /components. All .scss files need to be imported into src/index.scss.

# Code Styleguide

We follow the AirBnb Styleguide [link](https://github.com/airbnb/javascript/tree/master/react)

# Component Library

We use Ant Design [link](https://ant.design/docs/react/introduce)

## :computer: Contributing

### Code style

Code style is checked and enforced by [Prettier](https://prettier.io/), we
highly recommend installing an extension for VSCode editor and turn on
formatting on save.

Basic static analysis is done by [ESLint](https://eslint.org/), most editor
support error highlighting

### Git Commit Style

- feat (new feature)
- fix (bug fix)
- docs (changes to documentation)
- style (formatting, missing semi colons, etc; no code change)
- refactor (refactoring production code)
- test (adding missing tests, refactoring tests; no production code change)
- chore (updating grunt tasks etc; no production code change

## :eyeglasses: Maintainers

- [Veli](https://bitbucket.org/veliveja/profile/teams)
- [Puthi](https://bitbucket.org/phutimokwena/profile/teams)
- [Jaco](https://bitbucket.org/jaco_gerber/profile/teams)
- [Nelson](https://bitbucket.org/nelson_ndimba/profile/teams)
- [Lesego](https://bitbucket.org/lesegomalitsi/profile/teams)
- [Matthew](https://bitbucket.org/matthew_mollentze/profile/teams)
