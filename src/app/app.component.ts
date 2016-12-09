import { Component, OnInit } from '@angular/core';
import { SessionStorage } from 'ng2-webstorage';

import { HeroService } from './services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NG2 Heroe Merge';
  @SessionStorage('heroes_api_key') apikey: string;

  constructor(private heroService: HeroService) {
    if (!this.apikey) {
      this.heroService.getHeroesApiKey()
        .then(apikey => this.apikey = apikey);
    }
  }

  ngOnInit() {
  }
}
