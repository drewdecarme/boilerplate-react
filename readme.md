# React / Redux Boilerplate

## Table of Contents
  1. [Features](#features)
  2. [Getting Started](#getting-started)
  3. [Guidelines and Examples]()

## Features
#### Javscript
- [React](https://facebook.github.io/react) 
- [React Router](https://reacttraining.com/react-router/)
- [ES6](http://es6-features.org) (with [Babel](https://babeljs.io))
- [Redux](http://redux.js.org/)

#### Internationalization
- [React Intl](https://github.com/yahoo/react-intl)
- [Babel Plugin React Intl](https://github.com/yahoo/babel-plugin-react-intl)

#### Evaluating
- [JS Cookie](https://github.com/js-cookie/js-cookie)
- [Transfonter]()

#### TODO
- [AirBnB React Syntax Style Guide](https://github.com/airbnb/javascript/tree/master/react)
- [React Storybook](https://github.com/storybooks/storybook)
  
#### Style
- [Bootstrap 4 (Grid Only)](https://v4-alpha.getbootstrap.com/) Note Style is commented out by default
- [Modularscale Sass](https://github.com/modularscale/modularscale-sass)
- [Babel Plugin React CSS Modules](https://github.com/gajus/babel-plugin-react-css-modules) used in conjunction with [Sass](http://sass-lang.com/documentation/file.SCSS_FOR_SASS_USERS.html)
- [Post CSS](https://github.com/postcss/postcss)
- [Auto Prefixer](https://github.com/postcss/autoprefixer)

#### Asset Pipeline
- [ESLint](http://eslint.org/) based upon [AirBnB Best Practices](https://github.com/airbnb/javascript/tree/master/linters)
- [Webpack 2](https://webpack.js.org/) based upon a cool ["how to"](https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783)
- [Hot Module Replacement](https://medium.com/@dan_abramov/hot-reloading-in-react-1140438583bf#.xh6v0ht7j) ([React Hot Loader 3](https://github.com/gaearon/react-hot-loader/issues/243))
- [Webpack Visualizer](https://chrisbateman.github.io/webpack-visualizer/)
- [Webpack-dev-server](https://webpack.js.org/how-to/develop/#webpack-dev-server)
- [Gulp](http://gulpjs.com/)
- [Browser Sync](https://www.browsersync.io/)
- [Yarn](https://yarnpkg.com/en/)

#### Plugins


## Getting Started
  1. Clone the repo `git clone`
  2. Enter the working directory `cd boilerplate-react-redux`
  3. Install dependencies `yarn install` (If you don't have yarn installed, you can install it by following the instructions [here](https://yarnpkg.com/lang/en/docs/install/))
  4. Start the solution `yarn start`
  5. A browser window will open with the solution (if it doesn't open, navigate to [http://localhost:3000/](http://localhost:3000))

#### Build Scripts
  1. `yarn start` Starts **development** instance
  2. `yarn preview` Previews the **production** instance
  3. `yarn build` Builds the **production** instance
  4. `yarn storybook` Starts the storybook/component library
  5. `yarn test` Runs all of the tests
  6. `yarn test:auto` Runs all of the test automatically
  7. `yarn lint:js` Lints `.js && .jsx`
  8. `yarn lint:js:fix` Auto fixes `.js && .jsx` errors
  8. `yarn lint:js:help` Displays help for Eslint CLI

## Conventions

#### Creating a Component
  - [ ] Document creating a component

#### Sass Style Guide
  - [ ] Look into creating style guide

#### Component Library - [React Storybook](https://storybook.js.org/)
  - [x] Implement Storybook
  - [ ] Align Storybook config to current Webpack development config
  - [ ] Document Storybook

#### ES6 [Guide & Documentation]()
  - [ ] Fork Custom ES6 Markdown Cheat Sheet

#### Responsive Grid System - [Bootstrap 4 Grid](https://v4-alpha.getbootstrap.com/layout/grid/)
  - Bootstrap 4 Documentation
  - How to use Grid Component Architecture
  - Add and Create Grid Component
  - Rows
    - [x] Horizontal Alignment [(Docs)](https://v4-alpha.getbootstrap.com/layout/grid/#horizontal-alignment)
    - [x] Variable Width Content [(Docs)](https://v4-alpha.getbootstrap.com/layout/grid/#variable-width-content)
    - [x] Vertical Alignment [(Docs)](https://v4-alpha.getbootstrap.com/layout/grid/#vertical-alignment)
    - [x] No Gutters [(Docs)](https://v4-alpha.getbootstrap.com/layout/grid/#no-gutters)
  - Columns
    - [x] Offsetting Columns [(Docs)](https://v4-alpha.getbootstrap.com/layout/grid/#offsetting-columns)
    - [x] Vertical Self Align [(Docs)](https://v4-alpha.getbootstrap.com/layout/grid/#vertical-alignment)
    - [ ] Responsive Column Ordering [(Docs)](https://v4-alpha.getbootstrap.com/layout/grid/#flex-order)
  - Documentation Todos
    - [ ] Markdown Props for the above

#### Responsive Text System - [Modularscale Sass](https://github.com/modularscale/modularscale-sass)
  - Uses sass modular scale
  - Mobile first 16px base
  - Desktop 18px base
  - Uses "perfect-fourth" modular scaling system

#### Icons - [SVG React Loader](https://github.com/jhamlet/svg-react-loader)
  - SVG React Loader Documentation
  - Sizes & Component Documentation
  - Create Component

#### Images - [URL Loader](https://github.com/webpack-contrib/url-loader)
  - URL Loader Documentation
  - Component Documentation
  - Create Component

#### Internationalization - [React-intl](https://www.smashingmagazine.com/2017/01/internationalizing-react-apps/)
  - Use `<FormattedMessage></FormattedMessage>` when you need the text to have a span in it
  - Use React-Intl API for just plain text
  - `FormattedMessage` id prop should follow the convention `componentName.idLocaltoComponent`;
  - Document Component

#### Unit Testing (Mocha & Chai)

#### Validation 
  - Choose a Redux Validation Framework
  - Document Validation on Components

#### React Middlewear
 - 

#### Cookies
 - 
