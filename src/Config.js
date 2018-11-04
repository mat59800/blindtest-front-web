import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo_app from './logo_app.png';
import equipe_bleu from './rond_bleu.png';
import equipe_jaune from './rond_jaune.png';
import equipe_rouge from './rond_rouge.png';
import equipe_vert from './rond_vert.png';
import { MonEquipe, ChoixEquipe } from './Equipe';
import { MonPseudo, ChoixPseudo } from './Pseudo';
import Api from './Api';
import Cookies from 'universal-cookie';
import './Config.css';

const cookies = new Cookies();

class Config extends Component {
  state = {
    pseudo: cookies.get("pseudo"),
    equipe: cookies.get("equipe"),
    pret: false,
    choix_equipe:cookies.get("choix_equipe")==="false"?false:true,
    choix_pseudo:cookies.get("choix_pseudo")==="false"?false:true,
  }

  setCookie = (pseudo,equipe,choix_equipe, choix_pseudo) => {
    cookies.set("pseudo", pseudo);
    cookies.set("equipe", equipe);
    cookies.set("choix_pseudo", choix_pseudo);
    cookies.set("choix_equipe", choix_equipe);
  };

  handleButtonEquipeClick = () => {
    const { choix_equipe } = this.state
    this.setState({ choix_equipe: true })
  }

  handleButtonChoixEquipeClick = choix => {
    const { equipe, choix_equipe } = this.state
    this.setState({ choix_equipe: false , equipe:choix})
  }

  handleButtonPseudoClick = () => {
    const { choix_pseudo } = this.state
    this.setState({ choix_pseudo: true })
  }

  handleButtonChoixPseudoClick = choix => {
    const { pseudo, choix_pseudo } = this.state
    this.setState({ choix_pseudo: false , pseudo:choix})
  }

  handleButtonPretClick = () => {
    const { equipe, pseudo } = this.state
    this.setCookie(pseudo,equipe,false,false)
    let body =
    `<Joueur>
      <Equipe>${equipe}</Equipe>
      <Pseudo>${pseudo}</Pseudo>
    </Joueur>`
    Api.put(`/joueur/nouveau/${pseudo}`,body)
    .then(response => alert(response.status))
  }

  render() {
    const { pseudo, equipe, pret, choix_equipe, choix_pseudo } = this.state
    return (
      <div className="Config">
        <div>
          <img src={logo_app} className="Config-logo" alt="logo" />
        </div>
        <div  className="Config-body">
          {choix_equipe ? <ChoixEquipe onClick={this.handleButtonChoixEquipeClick}/> : <MonEquipe equipe={equipe} onClick={this.handleButtonEquipeClick}/>}
          {choix_pseudo ? <ChoixPseudo pseudo={pseudo} onClick={this.handleButtonChoixPseudoClick}/> : <MonPseudo pseudo={pseudo} onClick={this.handleButtonPseudoClick}/>}
        </div>
        <div>
          {!choix_equipe && !choix_pseudo && <Link to="/quiz"><input type="button" value="PRÊT?" onClick={this.handleButtonPretClick}/></Link>}
        </div>
      </div>
    );
  }
}

export default Config;
