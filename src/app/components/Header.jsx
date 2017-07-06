import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput';
import IconReact from '../../assets/icons/icon-react.inline.svg';

import './Header.scss';

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
      <header className="header" styleName="test">
        <IconReact />
        <h1>todos</h1>
        <TodoTextInput
          newTodo
          onSave={ this.handleSave }
          placeholder="What needs to be done?"
          />
      </header>
    );
  }
}

Header.propTypes = { addTodo: PropTypes.func.isRequired };

export default Header;
