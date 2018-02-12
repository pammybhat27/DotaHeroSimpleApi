import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {DotaHero} from '../model/dotaHero.model';

@Injectable()
export class DotaUserService {
// https://api.opendota.com/api/heroes
  private serviceUrl = 'https://api.opendota.com/api/heroes';

  constructor(private http: HttpClient) { }


  getUser(): Observable<DotaHero[]> {
    return this.http.get<DotaHero[]>(this.serviceUrl);
  }
}
