import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {PlayerinfoComponent} from '../components/playerinfo/playerinfo.component';
import {DotaPlayerInfoModel} from '../model/dotaPlayerInfo.model';

@Injectable()
export class PlayerInfoServiceService {

  constructor(private httpClient: HttpClient) { }

    getPlayerInfoData(): Observable<DotaPlayerInfoModel[]> {

    return this.httpClient.get<DotaPlayerInfoModel[]>('https://api.opendota.com/api/players/101868337');

    }

}
