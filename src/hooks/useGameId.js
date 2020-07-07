import React from 'react';
import { AppContext } from '../context/app.context';

export const useGameId = () => {
  const [gameId, setGameId] = React.useState(null);

  const setCurrentGameId = React.useCallback((currentGameId) => {
    setGameId(currentGameId);
  }, []);

  return {
    gameId,
    setGameId,
  };
};
