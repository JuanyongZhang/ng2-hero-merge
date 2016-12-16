import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import { SessionStorage } from 'ng2-webstorage';
import { Observable } from 'rxjs/Rx';


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Hero } from '../domains/hero';

@Injectable()
export class HeroService {
  @SessionStorage('heroes_api_key')
  private apiKey: string;
  private heroesApiKeyUrl = 'https://hero-merge.herokuapp.com/getApiKey';  // URL to web api

  constructor(private http: Http) { }

  getHeroServiceURL(): string {
    return `https://hero-merge.herokuapp.com/${this.apiKey}/heroes`;
  }

  getHeroesApiKey(): Observable<string> {
    if (this.apiKey) {
      return Observable.of(this.apiKey);
    } else {
      return this.http
        .get(this.heroesApiKeyUrl)
        .map(response => {
          this.apiKey = response.json().apiKey as string;
          return this.apiKey;
        });
    }

  }

  getHeroes(): Observable<Hero[]> {
    return this.getHeroesApiKey()
      .flatMap((apiKey) =>
        this.http
          .get(this.getHeroServiceURL())
          .map(response => response.json() as Hero[])
      );
  }

  getHero(id: number): Observable<Hero> {
    return this.getHeroes()
      .map(heroes => heroes.find(hero => hero.id === id));
  }

  save(hero: Hero): Observable<Hero> {
    if (hero.id) {
      return this.patch(hero);
    }
    return this.post(hero);
  }

  delete(hero: Hero): Observable<Response> {
    let url = `${this.getHeroServiceURL()}/${hero.id}`;
    return this.http
      .delete(url, this.generateCommonRequestOptionsArgs());
  }

  // Add new Hero
  private post(hero: Hero): Observable<Hero> {
    return this.http
      .post(this.getHeroServiceURL(), JSON.stringify(hero), this.generateCommonRequestOptionsArgs())
      .map(res => res.json().data);
  }

  // Update existing Hero
  private patch(hero: Hero): Observable<Hero> {

    let url = `${this.getHeroServiceURL()}/${hero.id}`;

    return this.http
      .patch(url, JSON.stringify(hero), this.generateCommonRequestOptionsArgs())
      .map(() => hero);
  }

  public mergeHeroes(heroes: Hero[]): Hero {
    return new Hero();
  }

  generateCommonRequestOptionsArgs(): RequestOptionsArgs {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return <RequestOptionsArgs>{
      headers: headers
    };
  }
}
