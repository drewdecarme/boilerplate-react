import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../Header';
import MainSection from '../MainSection/';

const TodoActions = {};

const Home = props => {
  const { todos, actions } = props;

  return (
    <div>
      <Header
        addTodo={ actions.addTodo }
      />
      <MainSection
        todos={ todos }
        actions={ actions }
      />
    </div>
  );
};

Home.propTypes = {
  todos: PropTypes.array,
  actions: PropTypes.object.isRequired
};

Home.defaultProps = {
  todos: [],
  actions: {}
};

const mapStateToProps = state => {
  return { todos: state.todos };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(TodoActions, dispatch) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
