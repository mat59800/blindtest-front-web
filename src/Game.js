import React, { Component } from 'react';
import Buzzer from './Buzzer';
import './Game.css';

class Game extends Component {
  render() {
    return (
      <div className="Game">
        <Buzzer />
        <div className="Game_info">
          Equipe: bleu     Pseudo: Mathieu  Points: 50 pts
        </div>
      </div>
    );
  }
}

export default Game;
