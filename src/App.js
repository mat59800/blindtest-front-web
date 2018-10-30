import React, { Component } from 'react';
import logo_app from './logo_app.png';
import './App.css';

class App extends Component {
  state = {
    pseudo: "pseudo_1",
    equipe: "equipe_1",
    pret: false,
  }
  render() {
    const { pseudo, equipe, pret } = this.state
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo_app} className="App-logo" alt="logo" />
        </div>
        <div  className="App-body">
          <div className="App-equipe">
            <p id="labelEquipe">Ton equipe</p>
            <p className="App-texte">{equipe}</p>
            <input type="button" value="MODIFIER"/>
          </div>
          <div className="App-pseudo">
            <p id="labelPseudo">Ton pseudo</p>
            <p className="App-texte">{pseudo}</p>
            <input type="button" value="MODIFIER"/>
          </div>
        </div>
        <div>
          <br />
          <br />
          <br />
          {pret ? <p className="App-texte">PRÊT</p> : <input type="button" value="PRÊT?"/>}
        </div>
      </div>
    );
  }
}

export default App;
