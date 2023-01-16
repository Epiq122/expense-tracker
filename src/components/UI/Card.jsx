// this is a Wrapper component that adds a className to the div

import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

function Card({ children, className }) {
  // this is a adds the className prop to the className string
  const classes = `card ${className}`;
  return <div className={classes}>{children}</div>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
