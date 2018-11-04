import React from 'react';
import logo_pseudo from './pseudo.png';
import './Pseudo.css';

const MonPseudo = ({pseudo, onClick}) => (
    <div className="Pseudo">
      <img src={logo_pseudo} className="Pseudo-logo" alt="logo" />
      <span className="Config-texte">{pseudo}</span>
      <p id="labelPseudo">Ton pseudo</p>
      <input type="button" value="MODIFIER" onClick={() => onClick()}/>
    </div>
  )

const ChoixPseudo = ({pseudo, onClick}) => {
  let inputPseudo = React.createRef();
  return (
    <div className="Pseudo">
      <img src={logo_pseudo} className="Pseudo-logo" alt="logo" />
      <p id="labelPseudo">Choisir un pseudo</p>
      <input type="text" name="inputPseudo" ref={(ref) => inputPseudo = ref} defaultValue={`${pseudo}`}/>
      <input type="button" value="ENREGISTRER" onClick={() => onClick(inputPseudo.value)}/>
    </div>
  )
}
export { MonPseudo,ChoixPseudo };

