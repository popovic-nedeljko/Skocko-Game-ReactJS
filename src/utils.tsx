import { ReactElement } from 'react';

import {
  BsFillSuitSpadeFill,
  BsFillStarFill,
  BsFillSuitClubFill,
  BsFillSuitHeartFill,
} from 'react-icons/bs';
import { GiDiamonds, GiCardJoker } from 'react-icons/gi';

export const symbols = [
  <BsFillSuitSpadeFill color={`var(--color-black)`} />,
  <BsFillStarFill color={`var(--color-yellow)`} />,
  <BsFillSuitClubFill color={`var(--color-black)`} />,
  <GiDiamonds color={`var(--color-red)`} />,
  <GiCardJoker color={`var(--color-blue-dark)`} />,
  <BsFillSuitHeartFill color={`var(--color-red)`} />,
];

export const random = (item: ReactElement[]): number => {
  const number: number = Math.floor(Math.random() * item.length);
  return number;
};
