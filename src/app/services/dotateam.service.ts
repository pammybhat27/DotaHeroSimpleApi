import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {DotaTeamModel} from '../model/dotaTeam.model';

@Injectable()
export class DotateamService {
// https://api.opendota.com/api/teams
  private teamServiceURL = 'https://api.opendota.com/api/teams';


  constructor( private teamClient: HttpClient) { }

  getTeam(): Observable<DotaTeamModel[]> {

return this.teamClient.get<DotaTeamModel[]>(this.teamServiceURL);

  }
}
