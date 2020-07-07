import React from 'react';
import StepWizard from 'react-step-wizard';
import CharacterSelect from './steps/character-select/CharacterSelect';

function GameSetup(props) {
  return (
    <div className="setupView">
      <StepWizard isHashEnabled={true}>
        <CharacterSelect hashKey={'character'} />
        <CharacterSelect hashKey={'character'} />
      </StepWizard>
    </div>
  );
}

export default GameSetup;
