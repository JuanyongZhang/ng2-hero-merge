import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2Webstorage } from 'ng2-webstorage';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail.component';
import { HeroMergeComponent } from './components/hero-merge.component';
import { HeroesComponent } from './components/heroes.component';
import { HeroSearchComponent } from './components/hero-search.component';

import { HeroService } from './services/hero.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2Webstorage,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    HeroMergeComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
