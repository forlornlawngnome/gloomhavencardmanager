import React from 'react';

import './ClassHeader.css';

const ClassHeader = (props) => {
  const {characterClass, iconImage} = props;

  // TODO less prop drilling
  return (
    <div className="ClassHeader">
      <img src={iconImage} />
      <span>{characterClass}</span>
    </div>
  )
}

export default ClassHeader;
