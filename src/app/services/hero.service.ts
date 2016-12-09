import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptionsArgs, URLSearchParams, Jsonp } from '@angular/http';
import { SessionStorage } from 'ng2-webstorage';
import { Observable } from 'rxjs/Rx';


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Hero } from '../domains/hero';

@Injectable()
export class HeroService {
  private heroesApiKeyUrl = 'https://hero-merge.herokuapp.com/getApiKey';  // URL to web api
  @SessionStorage('heroes_api_key') private apiKey: string;

  constructor(private http: Http,
    private jsonp: Jsonp) { }

  obtainHeroesApiKey(): Observable<string> {
    if (this.apiKey) {
      return Observable.of(this.apiKey);
    }

    return this.http
      .get(this.heroesApiKeyUrl)
      .map(response => {
        this.apiKey = response.json().apiKey as string;
        return this.apiKey;
      });
  }

  obtainHeroes(): Observable<Hero[]> {
    return this.obtainHeroesApiKey()
      .flatMap((apiKey) =>
        this.http
          .get(this.getHeroServiceURL())
          .map(response => response.json() as Hero[])
      );
  }

  getHeroesApiKey(): Promise<string> {
    return this.http
      .get(this.heroesApiKeyUrl, this.generateCommonRequestOptionsArgs())
      .toPromise()
      .then(response => response.json().apiKey as string)
      .catch(this.handleError);
  }

  getHeroServiceURL(): string {
    return `https://hero-merge.herokuapp.com/${this.apiKey}/heroes`;
  }

  getHeroes(): Promise<Hero[]> {
    return this.http
      .get(this.getHeroServiceURL())
      .toPromise()
      .then(response => response.json() as Hero[])
      .catch(this.handleError);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

  save(hero: Hero): Promise<Hero> {
    if (hero.id) {
      return this.put(hero);
    }
    return this.post(hero);
  }

  delete(hero: Hero): Promise<Response> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.getHeroServiceURL()}/${hero.id}`;

    return this.http
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handleError);
  }

  // Add new Hero
  private post(hero: Hero): Promise<Hero> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.getHeroServiceURL(), JSON.stringify(hero), { headers: headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  // Update existing Hero
  private put(hero: Hero): Promise<Hero> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.getHeroServiceURL()}/${hero.id}`;

    return this.http
      .put(url, JSON.stringify(hero), { headers: headers })
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


  private generateCommonRequestOptionsArgs(): RequestOptionsArgs {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return <RequestOptionsArgs>{
      headers: headers
    };
  }

}
