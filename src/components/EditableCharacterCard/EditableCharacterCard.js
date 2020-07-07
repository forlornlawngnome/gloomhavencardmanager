import React from 'react';
import CharacterCard from '../CharacterCard';

import dotsImg from '../../img/dots.png';
import deleteImg from '../../img/x.png';

import './EditableCharacterCard.css';

const EditableCharacterCard = (props) => {
  const {id, image, name, characterClass, level} = props;

  // TODO less prop drilling
  return (
    <div className="EditableCharacterCard">
      <div className="EditableCharacterCardButtons">
        <input type="image" id="image" alt="Edit" src={dotsImg} />
        <input type="image" id="image" alt="Delete" src={deleteImg} />
      </div>
      <CharacterCard
        image={image}
        name={name}
        characterClass={characterClass}
        level={level} />
    </div>
  )
}

export default EditableCharacterCard;
