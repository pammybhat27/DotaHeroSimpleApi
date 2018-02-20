import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {DotaPlayerWinLossModel} from '../model/dotaPlayerWinLoss.model';
@Injectable()
export class PlayerstatisticsService {
  constructor(private httpPlayerStatistics: HttpClient) { }

  getPlayerStatistics(): Observable<DotaPlayerWinLossModel[]> {
  return this.httpPlayerStatistics.get<DotaPlayerWinLossModel[]>('https://api.opendota.com/api/players/101868337/wl');
  }

}
