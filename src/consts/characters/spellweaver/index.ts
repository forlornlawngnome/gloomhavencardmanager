import {Character} from '../../models/character.model';

import {perks} from './perks';
import spellweaverImg from './img/Spellweaver.png';
import spellweaverIconImg from './img/SpellweaverIcon.png';
import spellweaverIconSvgImg from './img/SpellweaverIcon.svg';

export const spellweaver: Character = {
  characterClass: 'Spellweaver',
  name: 'Spelly',
  level: 1,
  perks,
  images: {
    tall: spellweaverImg,
    icon: spellweaverIconImg,
    iconSvg: spellweaverIconSvgImg
  }
}
