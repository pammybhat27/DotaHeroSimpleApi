import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {DotaProPlayerModel} from '../model/dotaProPlayer.model';

@Injectable()
export class ProplayerService {
// https://api.opendota.com/api/proPlayers
private proPlayerServiceUrl = 'https://api.opendota.com/api/proPlayers';


  constructor(private proPlayerClient: HttpClient) { }

  getProPlayer(): Observable<DotaProPlayerModel[]> {

    return this.proPlayerClient.get<DotaProPlayerModel[]>(this.proPlayerServiceUrl);
  }



}
