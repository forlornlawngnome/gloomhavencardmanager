export enum CharacterCardModifiers {
  ATTACK_PLUS_1,
  POISON
}

export enum CharacterCardActionTypes {
  MOVE,
  ATTACK
}

export type CharacterCardAction = {
  verb: CharacterCardActionTypes,
  modifiers: CharacterCardModifiers
}

export type CharacterCardEffect = {
  actions: CharacterCardAction[]
}

export type CharacterCard = {
  title: string;
  level: number;
  labelX?: boolean;
  initiative: number;
  top: CharacterCardEffect;
  bottom: CharacterCardEffect;
}
