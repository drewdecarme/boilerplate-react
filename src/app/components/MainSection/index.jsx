import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from '../Grid/';

import './index.scss';

class MainSection extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleClearCompleted = this.handleClearCompleted.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleCompleteAll = this.handleCompleteAll.bind(this);
  }

  handleClearCompleted() {
    this.props.actions.clearCompleted();
  }

  handleCompleteAll() {
    this.props.actions.completeAll();
  }

  handleShow(filter) {
    this.setState({ filter });
  }

  renderToggleAll(completedCount) {
    const { todos } = this.props;
    if (todos.length > 0) {
      return (
        <input
          className="toggle-all"
          type="checkbox"
          checked={ completedCount === todos.length }
          onChange={ this.handleCompleteAll }
          />
      );
    }
  }

  render() {
    return (
      <section styleName="content">
        <Grid>
          <Row
            justify={{ orient: 'around', size: 'lg' }}
            noGutters>
            <Col
              cols={{ default: 12, sm: 12, md: 12, lg: 6, xl: 6 }}
              align="start">
              <p>Lets get started!</p>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

MainSection.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default MainSection;
