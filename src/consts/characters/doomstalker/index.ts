import {Character} from '../../models/character.model';

import {perks} from './perks';
import doomstalkerImg from './img/Doomstalker.png';
import doomstalkerIconImg from './img/DoomstalkerIcon.png';
import doomstalkerIconSvgImg from './img/DoomstalkerIcon.svg';

export const doomstalker: Character = {
  characterClass: 'Doomstalker',
  name: 'Dawson',
  level: 1,
  perks,
  images: {
    tall: doomstalkerImg,
    icon: doomstalkerIconImg,
    iconSvg: doomstalkerIconSvgImg
  }
}
