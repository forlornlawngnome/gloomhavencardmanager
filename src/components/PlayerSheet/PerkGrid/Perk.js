import React from 'react';

const Perk = (props) => {
  const {description, count, selectedCount} = props;

  return (
    <div className="PerkRow">
      {
        Array.apply(null, { length: count }).map((e, i) => (
          <input type="checkbox" className="PerkRowCheckbox" key={i} />
        ))
      }
      <span>{description}</span>
    </div>
  )
}

export default Perk;
