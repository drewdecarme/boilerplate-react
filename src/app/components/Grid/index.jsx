import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

export const Grid = props => (
  <div styleName="container">{ props.children }</div>
);

export const Row = props => {
  const { noGutters } = props;

  const renderGutters = str => (str === true ? 'no-gutters' : '');

  const renderClass = () => [renderGutters(noGutters)].join(' ');

  return (
    <div styleName={ renderClass() }>{ props.children }</div>
  );
};

export const Col = props => {
  const { cols } = props;

  const parseCols = cols => (
    Object.keys(cols).map(e => {
      if (e === 'default') {
        return `col-${cols[e]}`;
      }

      return `col-${e}-${cols[e]}`;
    }).join(' ')
  );

  return (
    <div styleName={ parseCols(cols) }>{ props.children }</div>
  );
};

Grid.propTypes = { children: PropTypes.node.isRequired };

Row.propTypes = {
  children: PropTypes.node.isRequired,
  noGutters: PropTypes.bool
  // justify: PropTypes.object,
  // align: PropTypes.string,
};
Row.defaultProps = {
  noGutters: true
  // justify: {},
  // align: '',
};

Col.propTypes = {
  children: PropTypes.node.isRequired,
  cols: PropTypes.object
};
Col.defaultProps = { cols: {}};

