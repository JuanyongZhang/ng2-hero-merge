import { Attributes } from './attributes';


export class Hero {
  id: number;
  hero_name: string;
  real_name: string;
  gender: string;
  attributes: Attributes = new Attributes();
  powers: string[];
  weaknesses: string[];
}
