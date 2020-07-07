import {Character} from '../../models/character.model';

import {perks} from './perks';
import mindthiefImg from './img/Mindthief.png';
import mindthiefIconImg from './img/MindthiefIcon.png';
import mindthiefIconSvgImg from './img/MindthiefIcon.svg';

export const mindthief: Character = {
  characterClass: 'Mindthief',
  name: 'Prof',
  level: 1,
  perks,
  images: {
    tall: mindthiefImg,
    icon: mindthiefIconImg,
    iconSvg: mindthiefIconSvgImg
  }
}
