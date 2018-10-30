import React, { Component } from 'react';
import Button from './Button';
import './Buzzer.css';

class Buzzer extends Component {
  render() {
    return (
      <div className="Buzzer">
        <Button className="Buzzer_button" color="blue"/>
        <Button className="Buzzer_button" color="red"/>
        <Button className="Buzzer_button" color="green"/>
        <Button className="Buzzer_button" color="yellow"/>
      </div>
    );
  }
}

export default Buzzer;
