import React, { useState, useEffect } from 'react';
import { useIndexedDB } from 'react-indexed-db';
import CharacterCard from '../../../../components/CharacterCard/CharacterCard';
import EditableCharacterCard from '../../../../components/EditableCharacterCard/EditableCharacterCard';
import {characters as newCharacters} from '../../../../consts/characters';

import './CharacterSelect.css';

const CharacterSelect = (props) => {
  const { add, getAll } = useIndexedDB('characters');

  const [characters, setCharacters] = useState();

  useEffect(() => {
    getAll().then(charactersFromDb => {
      setCharacters(charactersFromDb);
    });
  }, []);

  return (
    <div>
      <div className="BannerHeader"> Continue: </div>
      <div className="CharacterSelectGrid">
        {characters && characters.map(c =>
          <div
            key={`${c.characterClass}:${c.name}`}
            className="CharacterSelectGridItem">

            <EditableCharacterCard
              id={c.id}
              name={c.name}
              level={c.level}
              image={c.images.tall}
              characterClass={c.characterClass} />
          </div>
        )}
    </div>

      <div className="BannerHeader"> New Character: </div>
      <div className="CharacterSelectGrid">
        {
          newCharacters.map(c =>
            <div
              key={`${c.characterClass}:${c.name}`}
              className="CharacterSelectGridItem">

              <CharacterCard
                name={c.name}
                level={c.level}
                image={c.images.tall}
                characterClass={c.characterClass}
                onClick={() => add(c)} />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default CharacterSelect;
