import { Passage } from '../types';
import { a1Passages } from './a1';
import { a2Passages } from './a2';
import { b1Passages } from './b1';
import { b2Passages } from './b2';
import { c1Passages } from './c1';
import { c2Passages } from './c2';

export const passages: Passage[] = [
  ...a1Passages,
  ...a2Passages,
  ...b1Passages,
  ...b2Passages,
  ...c1Passages,
  ...c2Passages
];
