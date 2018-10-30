import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return (
      <div className="Button" style={{backgroundColor: `${this.props.color}`}}/>
    );
  }
}

export default Button;
