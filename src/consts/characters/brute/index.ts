import {Character} from '../../models/character.model';

import {perks} from './perks';
import bruteImg from './img/Brute.png';
import bruteIconImg from './img/BruteIcon.png';
import bruteIconSvgImg from './img/BruteIcon.svg';

export const brute: Character = {
  characterClass: 'Brute',
  name: 'Etude',
  level: 1,
  perks,
  images: {
    tall: bruteImg,
    icon: bruteIconImg,
    iconSvg: bruteIconSvgImg
  }
}
