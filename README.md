# Blaumac React Template

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

