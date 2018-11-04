import React from 'react';
import equipe_bleu from './rond_bleu.png';
import equipe_jaune from './rond_jaune.png';
import equipe_rouge from './rond_rouge.png';
import equipe_vert from './rond_vert.png';
import './Equipe.css';

const MonEquipe = ({equipe , onClick}) => (
    <div className="Equipe">
      <img src={`${equipe}`} className="Equipe-logo" alt="logo" />
      <p id="labelEquipe">Ton equipe</p>
      <input type="button" value="MODIFIER" onClick={() => onClick()}/>
    </div>
  )

const ChoixEquipe = ({onClick}) => (
    <div className="Equipe">
      <p id="labelEquipe">Choisir l'équipe</p>
      <div>
        <img src={equipe_bleu} className="Equipe-logo" alt="logo" onClick={() => onClick(equipe_bleu)}/>
        <img src={equipe_jaune} className="Equipe-logo" alt="logo" onClick={() => onClick(equipe_jaune)}/>
        <img src={equipe_rouge} className="Equipe-logo" alt="logo" onClick={() => onClick(equipe_rouge)}/>
        <img src={equipe_vert} className="Equipe-logo" alt="logo" onClick={() => onClick(equipe_vert)}/>
      </div>
    </div>
  )

export { MonEquipe,ChoixEquipe };
