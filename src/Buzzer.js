import React, { Component } from 'react';
import Button from './Button';
import './Buzzer.css';

class Buzzer extends Component {
  state = {
    clickedButton: "",
  }

  handleButtonClick = color => {
    const { clickedButton } = this.state

    if ("" === clickedButton) {
      this.setState({ clickedButton: color })
    }
  }

  getFeedbackForButton(color) {
    const { clickedButton } = this.state

    if (color === clickedButton) {
      return "cliqued"
    } else {
      return "uncliqued"
    }
  }

  render() {
    return (
      <div className="Buzzer">
        <div>
          <Button
            color="red"
            feedback={this.getFeedbackForButton("red")}
            key={"red"}
            onClick={this.handleButtonClick}
          />
          <Button
            color="yellow"
            feedback={this.getFeedbackForButton("yellow")}
            key={"yellow"}
            onClick={this.handleButtonClick}
          />
        </div>
        <div>
          <Button
            color="green"
            feedback={this.getFeedbackForButton("green")}
            key={"green"}
            onClick={this.handleButtonClick}
          />
          <Button
            color="blue"
            feedback={this.getFeedbackForButton("blue")}
            key={"blue"}
            onClick={this.handleButtonClick}
          />
        </div>
      </div>
    );
  }
}

export default Buzzer;
