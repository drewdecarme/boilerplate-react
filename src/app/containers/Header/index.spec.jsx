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
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
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
