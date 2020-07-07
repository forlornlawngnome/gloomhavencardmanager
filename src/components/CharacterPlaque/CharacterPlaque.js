import React, { useState, useEffect } from 'react';
import { useIndexedDB } from 'react-indexed-db';
import CharacterCard from '../CharacterCard/CharacterCard';

import './EditableCharacterCard.css';

const EditableCharacterCard = (props) => {
  const {id} = props;

  const { get } = useIndexedDB('characters');

  const [character, setCharacter] = useState();

  useEffect(() => {
    get(id).then(characterFromDb => {
      setCharacter(characterFromDb);
    });
  }, []);

  if (!character) {
      return null;
  }

  // TODO less prop drilling
  return (
    <div>
      <CharacterCard
        image={character.image}
        name={character.name}
        characterClass={character.characterClass}
        level={character.level} />
    </div>
  )
}

export default EditableCharacterCard;
