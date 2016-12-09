import { Component, OnInit } from '@angular/core';
import { SessionStorage } from 'ng2-webstorage';

import { HeroService } from './services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NG2 Heroe Merge';

  constructor() {
  }

}
