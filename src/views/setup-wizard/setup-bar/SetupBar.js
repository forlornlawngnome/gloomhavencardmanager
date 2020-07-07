import React from 'react';
import './SetupBar.css';

const SetupBar = (props) => {
  const {step} = props;

  return (
    <div className="CharacterCard">
      <img src={image} />
      <span>{classTitle}</span>
    </div>
  )
}

export default CharacterCard;
