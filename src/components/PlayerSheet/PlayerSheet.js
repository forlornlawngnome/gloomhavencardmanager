import React, { useState, useEffect } from 'react';
import {useCharacterId} from '../../hooks/useCharacterId';
import { useIndexedDB } from 'react-indexed-db';
import ClassHeader from './ClassHeader/ClassHeader';
import PerkGrid from './PerkGrid/PerkGrid';
import NameAndLevelInfo from './NameAndLevelInfo/NameAndLevelInfo';
import './PlayerSheet.css';

const PlayerSheet = (props) => {
  const {id, onClick} = props;

  //const [characterId, setCharacterId] = useCharacterId();
  const { getByID } = useIndexedDB('characters');

  const [character, setCharacter] = useState();

  useEffect(() => {
    getByID(16).then(charactersFromDb => {
      setCharacter(charactersFromDb);
    });
  }, []);

  const {images, name, perks, characterClass, level} = character || {};
  const {icon} = images || {};

  // TODO less prop drilling
  return (
    <div className="PlayerSheet">
      <ClassHeader iconImage={icon} characterClass={characterClass} />
      <NameAndLevelInfo name={name} level={level} />
      <PerkGrid perks={perks} />
    </div>
  )
}

export default PlayerSheet;
