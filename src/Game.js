import React, { Component } from 'react';
import Buzzer from './Buzzer';
import Config from './Config';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Game.css';

class Game extends Component {
  render() {
    return (
      <Router className="Game">
        <div>
          <Route exact path="/" component={Config} />
          <Route path="/quiz" component={Buzzer} />
        </div>
      </Router>
    );
  }
}

export default Game;
