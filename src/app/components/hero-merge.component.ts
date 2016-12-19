import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Hero } from '../domains/hero';
import { HeroMerge } from '../domains/hero-merge';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-merge',
  templateUrl: './hero-merge.component.html',
  styleUrls: ['./hero-merge.component.css']
})
export class HeroMergeComponent implements OnInit {
  @Input() hero: Hero = new Hero();
  @Input() heroMerge: HeroMerge;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  save(): void {
    this.heroService
      .save(this.hero)
      .subscribe(hero => {
        console.log('Merged Hero:', hero);
        this.router.navigate(['/heroes']);
      });
  }

  goBack(savedHero: Hero = null): void {
    this.close.emit(savedHero);
    if (this.navigated) { window.history.back(); }
  }
}



