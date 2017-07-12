import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

export const Grid = props => (
  <div styleName="container">{ props.children }</div>
);

export const Row = props => {
  const { noGutters, align, justify } = props;

  const renderJustify = justify => {
    const { orient, size } = justify;

    if (typeof orient !== 'undefined' && typeof size !== 'undefined') {
      return `justify-${size}-content-${orient}`;
    } else if (typeof orient !== 'undefined') {
      return `justify-content-${orient}`;
    }

    return '';
  };

  const renderAlign = orient => typeof orient !== 'undefined' ? `align-items-${orient}` : '';

  const renderGutters = bool => bool === true ? 'no-gutters' : '';

  const renderRow = () => ['row', renderGutters(noGutters), renderAlign(align), renderJustify(justify)].join(' ');

  return (
    <div styleName={ renderRow() }>{ props.children }</div>
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
  noGutters: PropTypes.bool,
  align: PropTypes.oneOf(['start', 'center', 'end']),
  justify: PropTypes.shape({
    orient: PropTypes.oneOf(['start', 'center', 'end', 'around', 'between']),
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl'])
  })
};
Row.defaultProps = {
  noGutters: true,
  align: undefined,
  justify: {
    orient: undefined,
    size: undefined
  }
};

Col.propTypes = {
  children: PropTypes.node.isRequired,
  cols: PropTypes.object
};
Col.defaultProps = { cols: {}};

