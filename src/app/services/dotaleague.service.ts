import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {DotaLeagueModel} from '../model/dotaLeague.model';

@Injectable()
export class DotaleagueService {
// https://api.opendota.com/api/leagues
  private leagueServiceURL = 'https://api.opendota.com/api/leagues';
  constructor( private leagueClient: HttpClient) { }

  getLeague(): Observable<DotaLeagueModel[]> {
    return this.leagueClient.get<DotaLeagueModel[]>(this.leagueServiceURL);

  }

}
