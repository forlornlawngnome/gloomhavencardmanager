export enum GameEffects {
  ADD_ONE_PLUS_1_ATTACK
}

export type CharacterPerk = {
  description: String;
  count: number;
  selectedCount: number;
  effects: GameEffects[];
}

export type CharacterImages = {
  tall: String;
  icon: String;
  iconSvg: String;
}

export type Character = {
  characterClass: String;
  name: String;
  level: number;
  perks: CharacterPerk[];
  images: CharacterImages;
}
