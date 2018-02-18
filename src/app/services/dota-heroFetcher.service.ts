import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {DotaHero} from '../model/dotaHero.model';

@Injectable()
export class DotaHeroFetcherService {
// https://api.opendota.com/api/heroes
  private serviceUrl = 'https://api.opendota.com/api/heroes';

 // https://api.opendota.com/api/matches/  +   {match_id}
  constructor(private http: HttpClient) { }


  getUser(): Observable<DotaHero[]> {
    console.log(this.http.get<DotaHero[]>(this.serviceUrl));
    return this.http.get<DotaHero[]>(this.serviceUrl);
  }
}
