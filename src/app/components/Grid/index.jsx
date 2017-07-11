import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

export const Grid = props => (
  <div styleName="container">{ props.children }</div>
);

export const Row = props => (
  <div styleName="row">{ props.children }</div>
);

export const Col = props => (
  <div styleName="col">{ props.children }</div>
);

Grid.propTypes = { children: PropTypes.node.isRequired };
Row.propTypes = { children: React.PropTypes.node.isRequired };
Col.propTypes = { children: PropTypes.node.isRequired };
