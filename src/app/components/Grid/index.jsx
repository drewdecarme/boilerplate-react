import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

export const Grid = props => (
  <div styleName="container">{ props.children }</div>
);

export const Row = props => (
  <div styleName="row">{ props.children }</div>
);

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
Row.propTypes = { children: React.PropTypes.node.isRequired };
Col.propTypes = {
  children: PropTypes.node.isRequired,
  cols: PropTypes.object
};

Col.defaultProps = { cols: {}};
