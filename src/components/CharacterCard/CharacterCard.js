import React from 'react';
import './CharacterCard.css';

const CharacterCard = (props) => {
  const {image, name, characterClass, level, onClick} = props;

  return (
    <div className="CharacterCard" onClick={onClick}>
      <img src={image} />
      <div className="CharacterCardLabels">
        <div className="CharacterCardMainTitle">
          <span>{name}</span>
          <div className="CharacterCardMainTitleLV">
            <span className="CharacterCardMainTitleLVLabel">lv.</span>
            <span>{level}</span>
          </div>
        </div>
        <div className="CharacterCardSubtitle">
          {characterClass}
        </div>
      </div>
    </div>
  )
}

export default CharacterCard;
