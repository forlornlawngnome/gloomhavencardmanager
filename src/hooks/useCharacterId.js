import React from 'react';
import { AppContext } from '../context/app.context';

export const useCharacterId = () => {
  const [characterId, setCharacterId] = React.useState(null);

  const setCurrentCharacterId = React.useCallback((currentCharacterId) => {
    setCharacterId(currentCharacterId);
  }, []);

  return {
    characterId,
    setCharacterId,
  };
};
