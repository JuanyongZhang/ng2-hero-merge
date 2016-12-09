import { Attributes } from './attributes';


export class Hero {
  id: number;
  hero_name: string;
  real_name: string;
  gender: string;
  attributes: Attributes;
  powers: string[];
  weaknesses: string[];
}
