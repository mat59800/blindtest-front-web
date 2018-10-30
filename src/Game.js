import React, { Component } from 'react';
import Buzzer from './Buzzer';
import './Game.css';

class Game extends Component {
  render() {
    return (
      <div className="Game">
        <Buzzer />
        <div className="Game_info">
          <span>Equipe: bleu     Pseudo: Mathieu  Points: 50 pts</span>
        </div>
      </div>
    );
  }
}

export default Game;
