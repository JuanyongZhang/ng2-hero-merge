import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Collections from 'typescript-collections';

import { Hero } from '../domains/hero';
import { HeroService } from '../services/hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHeroes = new Collections.LinkedList<Hero>();
  newHero: Hero;
  addingHero = false;
  error: any;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  addHero(): void {
    this.addingHero = true;
    this.selectedHeroes.clear();
  }

  close(savedHero: Hero): void {
    this.addingHero = false;
    if (savedHero) { this.getHeroes(); }
  }

  deleteHero(hero: Hero, event: any): void {
    event.stopPropagation();
    this.heroService
      .delete(hero)
      .subscribe(res => {
        this.heroes = this.heroes.filter(h => h !== hero);
        this.selectedHeroes.clear();
      });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.addingHero = false;
    if (!this.selectedHeroes.contains(hero)) {
      if (this.selectedHeroes.size() > 1) {
        let el = this.selectedHeroes.first();
        this.selectedHeroes.removeElementAtIndex(0);
        console.log(`dequeuing : ${el.hero_name}`);
      }
      this.selectedHeroes.add(hero);
    }
  }


  viewDetail(hero: Hero): void {
    this.router.navigate(['/detail', hero.id]);
  }

  mergeHeroes(): void {
    console.log('Merge heroes:', this.selectedHeroes);
    let heroMerge = this.heroService.mergeHeroes(this.selectedHeroes.toArray());
  }
}

