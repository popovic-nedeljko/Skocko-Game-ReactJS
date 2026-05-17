import {
  BsFillSuitSpadeFill,
  BsFillSuitClubFill,
  BsFillSuitHeartFill,
} from 'react-icons/bs';
import { GiDiamonds, GiCardJoker } from 'react-icons/gi';
import { FaStar } from 'react-icons/fa';

export const SYMBOL_CONFIG = [
  { Icon: BsFillSuitHeartFill, color: '#cc2233', label: 'heart',   glow: 'rgba(200,30,50,0.7)'  },
  { Icon: GiDiamonds,          color: '#ff6600', label: 'diamond', glow: 'rgba(255,102,0,0.7)'  },
  { Icon: BsFillSuitClubFill,  color: '#22aa44', label: 'club',    glow: 'rgba(30,180,60,0.7)'  },
  { Icon: BsFillSuitSpadeFill, color: '#22a0cc', label: 'spade',   glow: 'rgba(30,160,210,0.7)' },
  { Icon: FaStar,              color: '#ffd700', label: 'star',    glow: 'rgba(255,215,0,0.7)'  },
  { Icon: GiCardJoker,         color: '#9933cc', label: 'joker',   glow: 'rgba(150,40,210,0.7)' },
];
