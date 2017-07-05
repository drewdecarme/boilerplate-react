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

#### TODO
- [AirBnB React Syntax Style Guide](https://github.com/airbnb/javascript/tree/master/react)
- [React Storybook](https://github.com/storybooks/storybook)
  
#### Style
- [Bootstrap 4 (Grid Only)](https://v4-alpha.getbootstrap.com/) Note Style is commented out by default
- [Modularscale Sass](https://github.com/modularscale/modularscale-sass)
- [Babel Plugin React CSS Modules](https://github.com/gajus/babel-plugin-react-css-modules) used in conjunction with [Sass](http://sass-lang.com/documentation/file.SCSS_FOR_SASS_USERS.html)
- [Post CSS](https://github.com/postcss/postcss)

#### Asset Pipeline
- [Auto Prefixer](https://github.com/postcss/autoprefixer)
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

### Build Scripts
  1. `yarn start` Starts **development** instance
  2. `yarn preview` Previews the **production** instance
  3. `yarn build` Builds the **production** instance
  4. `yarn storybook` Starts the storybook/component library
  5. `yarn test` Runs all of the tests
  6. `yarn test:auto` Runs all of the test automatically
  7. `yarn lint` Runs the linter
  8. `yarn lint:fix` Auto fixes linting inconsistencies
