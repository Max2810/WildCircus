import React from 'react'

function Performances(props) {
  return (
    <div className="contenu">   
      <h2>Performances</h2>
        <h3>{props.titre}</h3>
        <img className="image" src={props.image} alt={props.titre}/>
        <p>{props.text}</p>
    </div>
  );
}

export default Performances;
