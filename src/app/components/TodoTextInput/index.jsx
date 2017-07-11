import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class TodoTextInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { text: this.props.text || '' };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({ text: '' });
      }
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleBlur(e) {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  }

  render() {
    return (
      <input
        className={ classnames({
          edit: this.props.editing,
          'new-todo': this.props.newTodo
        }) }
        type="text"
        placeholder={ this.props.placeholder }
        value={ this.state.text }
        onBlur={ this.handleBlur }
        onChange={ this.handleChange }
        onKeyDown={ this.handleSubmit }
        />
    );
  }
}

TodoTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newTodo: PropTypes.bool
};

TodoTextInput.defaultProps = {
  text: '',
  placeholder: 'placeholder',
  editing: true,
  newTodo: false
};

export default TodoTextInput;