import {Character} from '../../models/character.model';

import {perks} from './perks';
import cragheartImg from './img/Cragheart.png';
import cragheartIconImg from './img/CragheartIcon.png';
import cragheartIconSvgImg from './img/CragheartIcon.svg';

export const cragheart: Character = {
  characterClass: 'Cragheart',
  name: 'Craig',
  level: 1,
  perks,
  images: {
    tall: cragheartImg,
    icon: cragheartIconImg,
    iconSvg: cragheartIconSvgImg
  }
}
