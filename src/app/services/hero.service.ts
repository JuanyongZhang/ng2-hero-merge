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

  // save(hero: Hero): Promise<Hero> {
  //   if (hero.id) {
  //     return this.put(hero);
  //   }
  //   return this.post(hero);
  // }

  // delete(hero: Hero): Promise<Response> {
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');

  //   let url = `${this.getHeroServiceURL()}/${hero.id}`;

  //   return this.http
  //     .delete(url, { headers: headers })
  //     .toPromise()
  //     .catch(this.handleError);
  // }

  // // Add new Hero
  // private post(hero: Hero): Promise<Hero> {
  //   let headers = new Headers({
  //     'Content-Type': 'application/json'
  //   });

  //   return this.http
  //     .post(this.getHeroServiceURL(), JSON.stringify(hero), { headers: headers })
  //     .toPromise()
  //     .then(res => res.json().data)
  //     .catch(this.handleError);
  // }

  // // Update existing Hero
  // private put(hero: Hero): Promise<Hero> {
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');

  //   let url = `${this.getHeroServiceURL()}/${hero.id}`;

  //   return this.http
  //     .put(url, JSON.stringify(hero), { headers: headers })
  //     .toPromise()
  //     .then(() => hero)
  //     .catch(this.handleError);
  // }

  // private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error);
  //   return Promise.reject(error.message || error);
  // }
}
