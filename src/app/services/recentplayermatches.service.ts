import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {DotaRecentPlayerMatchesModel} from '../model/dotaRecentPlayerMatches.model';

@Injectable()
export class RecentplayermatchesService {

  // https://api.opendota.com/api/players/101868337/recentMatches
  constructor(private httprecentplayermatchservice: HttpClient) { }

  getRecentPlyerMatch(): Observable<DotaRecentPlayerMatchesModel[]> {

    return this.httprecentplayermatchservice.get<DotaRecentPlayerMatchesModel[]>('https://api.opendota.com/api/players/101868337/recentMatches');

  }

}
