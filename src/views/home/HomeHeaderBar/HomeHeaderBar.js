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
      <ul className="cell menu small-12">
        {characters && characters.map(c =>
          <li
            key={`${c.characterClass}:${c.name}`}
            className="HomeHeaderBarItem">

            <MiniCharacterCard id={c.id} />
          </li>
        )}
        <li className="HomeHeaderBarNew menu-text float-right">
          + New
        </li>
      </ul>
    </div>
  )
}

export default CharacterSelect;
