import React, { useState, useEffect } from 'react';
import { useIndexedDB } from 'react-indexed-db';
import './MiniCharacterCard.css';

const MiniCharacterCard = (props) => {
  const {id, onClick} = props;

  const { getByID } = useIndexedDB('characters');

  const [character, setCharacter] = useState();

  useEffect(() => {
    getByID(id).then(charactersFromDb => {
      setCharacter(charactersFromDb);
    });
  }, []);

  const {images, name, characterClass, level} = character || {};
  const {icon} = images || {};

  return (
    <div className="MiniCharacterCard" onClick={onClick}>
      <img src={icon} />
      <div className="MiniCharacterCardLabels">
        <div className="MiniCharacterCardMainTitle">
          <span>{name}</span>
          <div className="MiniCharacterCardMainTitleLV">
            <span className="MiniCharacterCardMainTitleLVLabel">lv.</span>
            <span>{level}</span>
          </div>
        </div>
        <div className="MiniCharacterCardSubtitle">
          {characterClass}
        </div>
      </div>
    </div>
  )
}

export default MiniCharacterCard;
