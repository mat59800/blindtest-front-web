import React, { Component } from 'react';
import Button from './Button';
import './Buzzer.css';

class Buzzer extends Component {
  render() {
    return (
      <div className="Buzzer">
        <div>
          <Button className="Buzzer_button" color="#EF476F"/>
          <Button className="Buzzer_button" color="#FFD166"/>
        </div>
        <div>
          <Button className="Buzzer_button" color="#06D6A0"/>
          <Button className="Buzzer_button" color="#118AB2"/>
        </div>
      </div>
    );
  }
}

export default Buzzer;
