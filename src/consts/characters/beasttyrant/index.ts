import {Character} from '../../models/character.model';

import {perks} from './perks';
import beasttyrantImg from './img/BeastTyrant.png';
import beasttyrantIconImg from './img/BeastTyrantIcon.png';
import beasttyrantIconSvgImg from './img/BeastTyrantIcon.svg';

export const beasttyrant: Character = {
  characterClass: 'Beast Tyrant',
  name: 'Beasty',
  level: 1,
  perks,
  images: {
    tall: beasttyrantImg,
    icon: beasttyrantIconImg,
    iconSvg: beasttyrantIconSvgImg
  }
}
