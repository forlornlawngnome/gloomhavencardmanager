import React from 'react';
import Perk from './Perk';

import {characters} from '../../../consts/characters';

const PerkGrid = (props) => {
  const {perks} = props;

  if (!perks) {
    return null;
  }

  return (
    <div className="PerkGrid">
      {
        perks.map(p =>
          <Perk
            key={p.description}
            count={p.count}
            description={p.description} />
          )
      }
    </div>
  );
}

export default PerkGrid;
