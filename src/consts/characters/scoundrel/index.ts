import {Character} from '../../models/character.model';

import {perks} from './perks';
import scoundrelImg from './img/Scoundrel.png';
import scoundrelIconImg from './img/ScoundrelIcon.png';
import scoundrelIconSvgImg from './img/ScoundrelIcon.svg';

export const scoundrel: Character = {
  characterClass: 'Scoundrel',
  name: 'Scully',
  level: 1,
  perks,
  images: {
    tall: scoundrelImg,
    icon: scoundrelIconImg,
    iconSvg: scoundrelIconSvgImg
  }
}
