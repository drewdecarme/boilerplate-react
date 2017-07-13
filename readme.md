# React / Redux Boilerplate

## Table of Contents
  1. [Getting Started](#getting-started)
  2. [Scripts](#scripts)
  3. [Features](#features)
  4. [Credits](#credits)


## Getting Started
  1. Clone the repo `git clone`
  2. Enter the working directory `cd boilerplate-react-redux`
  3. Install dependencies `yarn install` (If you don't have yarn installed, you can install it by following the instructions [here](https://yarnpkg.com/lang/en/docs/install/))
  4. Start the solution `yarn start`
  5. A browser window will open with the solution (if it doesn't open, navigate to [http://localhost:3000/](http://localhost:3000))



## Scripts
  - `yarn start` Starts **development** build
  - `yarn preview` Previews the **production** build
  - `yarn build` Builds the **production** build
  - `yarn test` Runs all of the tests
  - `yarn test:auto` Runs all of the test automatically
  - `yarn styleguide` Launches the styleguide
  - `yarn styleguidist:build` Builds the styleguide for distribution
  - `yarn lint:js` Lints `.js && .jsx`
  - `yarn lint:js:fix` Auto fixes `.js && .jsx` errors
  - `yarn lint:js:help` Displays help for eslint CLI


## Features
### Component Library & Style Guide
The component library utilizes [React Styleguidist](https://react-styleguidist.js.org/) with the projects custom webpack configuration. React Styleguidist is and isolated React component development environment with a living style guide.

#### ES6 (ECMA2015)
ES6 should be used throughout this project at all times. ESLint is configured to recognize depricated methodologies and will throw an error in the build. All JS techniques are modeled after the [AirBnB React Syntax Style Guide](https://github.com/airbnb/javascript/tree/master/react). ESLint also extends the conventions that AirBnB uses.

Due to the massive update to the JS spec, you can refer to this [cheat sheet]() here for common concepts such as array and object deconstruction, arrow functions, symbols, and class notation.

#### Creating a Component
When adding a new component, it should be semantically named and placed within the `src > app > components` directory. Before it is added to the afore mentioned directory, it should be created within the **stories** directory. Within its new directory, the component should contain 3 files:

  1. `index.jsx` will be the main file which contains the React component code
  2. `index.scss` is the corresponding Sass style sheet for that component
  3. `index.spec.js` will contain the unit tests for the component

The purpose for repeating the index name-space continually is due to reducing the need to include resolved file extensions defined in both the webpack development and production builds.

#### Style Guide
This solution utilizes a concept of a Living Style Guide generated directly from the code of each of the React Components. Outside of a markdown file and some comments in each of the components, there is no other work required to maintain the style guide; a convention which is missing from most projects. React Styleguideist parses the entire component library, the markdown files associated with each component, the comments inside of each of the components, and compiles each `.scss` file imported into the component to create a comprehensive styleguide that can be viewed, shared, and edited in real time.

  - **To create the styleguide** refer to the [Build Scripts](#build-scripts)
  - **To document a component** refer to the [documentation](https://react-styleguidist.js.org/docs/documenting.html)
  - **To configure the layout of the style guide** refer to [configuration documentation](https://react-styleguidist.js.org/docs/configuration.html)

**Todo**
  - [x] Implement Styleguidist
  - [x] Align Styleguidist config to current Webpack development config
  - [ ] Configure Styleguidist Layout and Components to a working state
  - [ ] Add ES6 Cheat Sheet Fork Custom ES6 Markdown Cheat Sheet
  - [ ] Review AirBnb react conventions and adjust ESLint file

### Responsive Grid System
The [Bootstrap 4 Grid](https://v4-alpha.getbootstrap.com/layout/grid/) is the basis for the grid system in this project. A custom component with props that model the class structure illustrated in the linked documentation was created due to the way that this project binds CSS class imports to components.

Full documentation on the Grid component, how to use it, and what props to pass it can be found in the Style-guide or in the [.readme within the Grid component](). Some of the features for Rows and Columns include but aren't limited to:
  - **Rows**
    - Horizontal Alignment - [(Docs)](https://v4-alpha.getbootstrap.com/layout/grid/#horizontal-alignment)
    - Variable Width Content - [(Docs)](https://v4-alpha.getbootstrap.com/layout/grid/#variable-width-content)
    - Vertical Alignment - [(Docs)](https://v4-alpha.getbootstrap.com/layout/grid/#vertical-alignment)
    - No Gutters - [(Docs)](https://v4-alpha.getbootstrap.com/layout/grid/#no-gutters)
  - **Columns**
    - Offsetting Columns - [(Docs)](https://v4-alpha.getbootstrap.com/layout/grid/#offsetting-columns)
    - Vertical Self Align - [(Docs)](https://v4-alpha.getbootstrap.com/layout/grid/#vertical-alignment)

**Todo**
  - [ ] Create the Grid .readme
  - [ ] Comment the grid component to align with the style guide

### Responsive Text System
[Modularscale Sass](https://github.com/modularscale/modularscale-sass) was added to the base styles of the project to automatically generate an harmonic scale for typography across the application and device sizes.

#### Configuration
The base configuration sets the line height to 1.4 units. Mobile and Desktop base sizes are set to 16px and 18px respectively against a perfect fourth scale (1.2). The scale is respected across breakpoints while the base size changes based upon the response of a tablet sized device.

```sass
$font-line-height: 1.4;
$modularscale: (
  base: 16px,
  ratio: 1.2,
  768px: (
    base: 18px,
    ratio: 1.2,
  )
);
```

**Todo**
 - [ ] add `ms-respond` into the base text sizes

### Icons
Icons are added to the application using the Webpack 2 [SVG React Loader](https://github.com/jhamlet/svg-react-loader). The loader creates a component after relatively importing. The component can then be used like a normal react component. For more information, visit the [Icon Component .readme]()

```javascript
import IconReact from '../../../assets/icons/icon-react.inline.svg';

import './index.scss';

const Header = () => {
  return (
    <section styleName="reactIcon">
      <IconReact />
    </section>
  )
}
```

**Todo**
 - [ ] Document and Style Guide the Icons
 - [ ] Develop a convention for inlining dynaimcally named SVGs
 - [ ] Create Icon Component to use dynamically named SVGs

### Images
Module - [URL Loader](https://github.com/webpack-contrib/url-loader)
  - URL Loader Documentation
  - Component Documentation
  - Create Component

### Internationalization
Internationalization (also known as i18n) is available in this project to be a basis for interpeting locales, dates, plurals etc... across any region needed. [React-intl](https://github.com/yahoo/react-intl) provides various different methodologies that play well with the "react style" to add i18n into any component.

#### Conventions & Quick References
  - Use `<FormattedMessage></FormattedMessage>` when you need the text to have a span in it
  - Use React-Intl API for just plain text
  - `FormattedMessage` id prop should follow the convention `componentName.idLocaltoComponent`;
  - To get more detail on implementation, check out this [step-by-step walk through](https://www.smashingmagazine.com/2017/01/internationalizing-react-apps/)

#### Example
The below example uses both the component based solution as well as the API based solution.
```javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, intlShape, injectIntl, defineMessages } from 'react-intl';

import IconReact from '../../../assets/icons/icon-react.inline.svg';

import './index.scss';

const messages = defineMessages({
  appSubTitle: {
    id: 'header.subtitle',
    defaultMessage: 'React + Redux + Webpack',
    description: 'application subtitle'
  }
});

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header" styleName="header">
        <IconReact />
        <h1>
          <FormattedMessage
            id="header.title"
            defaultMessage="JS Boilerplate"
            description="title message of the application" />
        </h1>
        <h4>{ this.props.intl.formatMessage(messages.appSubTitle) }</h4>
      </header>
    );
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired,
  intl: intlShape.isRequired
};

export default injectIntl(Header);
```

**Todo**
  - [ ] Figure out [Babel Plugin React Intl](https://github.com/yahoo/babel-plugin-react-intl)

Module - 
  
  - Document Component
  - [React Intl](https://github.com/yahoo/react-intl)
  - 

### Unit Testing
Module - [Mocha & Chai || Jasmine]()

### Validation
Module - [TBD]()
  - Choose a Redux Validation Framework
  - Document Validation on Components

### React Middlewear
Module - [TBD]()
 - Documentation TBD

### Cookies
Module - [JSCookie]()
 - [ ] Documentation TBD




## Credits
#### Javscript
- [React](https://facebook.github.io/react)
- [React Router](https://reacttraining.com/react-router/)
- [Redux](http://redux.js.org/)
- [ES6](http://es6-features.org) (with [Babel](https://babeljs.io))
- [AirBnB React Syntax Style Guide](https://github.com/airbnb/javascript/tree/master/react)
- [ESLint](http://eslint.org/) based upon [AirBnB Best Practices](https://github.com/airbnb/javascript/tree/master/linters)
- [JS Cookie](https://github.com/js-cookie/js-cookie)

#### Style
- [Bootstrap 4 (Grid Only)](https://v4-alpha.getbootstrap.com/)
- [Babel Plugin React CSS Modules](https://github.com/gajus/babel-plugin-react-css-modules) used in conjunction with [Sass](http://sass-lang.com/documentation/file.SCSS_FOR_SASS_USERS.html)
- [Modularscale Sass](https://github.com/modularscale/modularscale-sass)
- [Post CSS](https://github.com/postcss/postcss)
- [Auto Prefixer](https://github.com/postcss/autoprefixer)

#### Asset Pipeline
- [Webpack 2](https://webpack.js.org/) based upon a cool ["how to"](https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783)
- [Hot Module Replacement](https://medium.com/@dan_abramov/hot-reloading-in-react-1140438583bf#.xh6v0ht7j) ([React Hot Loader 3](https://github.com/gaearon/react-hot-loader/issues/243))
- [Gulp](http://gulpjs.com/)
- [Browser Sync](https://www.browsersync.io/)
- [Yarn](https://yarnpkg.com/en/)
