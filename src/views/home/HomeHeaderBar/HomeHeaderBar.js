import React, { useState, useEffect } from 'react';
import { useIndexedDB } from 'react-indexed-db';
import MiniCharacterCard from '../../../components/MiniCharacterCard';
import {characters as newCharacters} from '../../../consts/characters';

import './HomeHeaderBar.css';

const CharacterSelect = (props) => {
  const { add, getAll } = useIndexedDB('characters');

  //const [characterId, setCharacterId] = useCharacterId();
  const [characters, setCharacters] = useState();

  useEffect(() => {
    getAll().then(charactersFromDb => {
      setCharacters(charactersFromDb);
    });
  }, []);

  return (
    <div className="HomeHeaderBar">
        {characters && characters.map(c =>
          <div
            key={`${c.characterClass}:${c.name}`}
            className="HomeHeaderBarItem">

            <MiniCharacterCard id={c.id} />
          </div>
        )}
        <div className="HomeHeaderBarNew">
          + New
        </div>
    </div>
  )
}

export default CharacterSelect;
