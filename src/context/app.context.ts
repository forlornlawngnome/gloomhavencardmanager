import React from 'react';

export interface AppContext {
  characterId: String;
  gameId: String;
  setCharacterId: (characterId: String) => void;
  setGameId: (gameId: String) => void;
}

export const APP_DEFAULT_VALUE = {
  characterId: '1',
  gameId: '1',
  setCharacterId: () => {},
  setGameId: () => {},
};

export const appContext = React.createContext<AppContext>(APP_DEFAULT_VALUE)
