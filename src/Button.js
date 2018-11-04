import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ color, feedback, onClick }) => (
  <div className={`Button ${feedback} ${color}`} onClick={() => onClick(color)}/>
)

Button.propTypes = {
  color: PropTypes.string.isRequired,
  feedback: PropTypes.oneOf([
    'cliqued',
    'uncliqued'
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button;
