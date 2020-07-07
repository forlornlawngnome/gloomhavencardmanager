import {Character} from '../../models/character.model';

import {perks} from './perks';
import tinkererImg from './img/Tinkerer.png';
import tinkererIconImg from './img/TinkererIcon.png';
import tinkererIconSvgImg from './img/TinkererIcon.svg';

export const tinkerer: Character = {
  characterClass: 'Tinkerer',
  name: 'Tink',
  level: 1,
  perks,
  images: {
    tall: tinkererImg,
    icon: tinkererIconImg,
    iconSvg: tinkererIconSvgImg
  }
}
