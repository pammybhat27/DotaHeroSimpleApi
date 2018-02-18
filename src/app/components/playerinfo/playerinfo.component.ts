import { Component, OnInit } from '@angular/core';
import {PlayerInfoServiceService} from '../../services/player-info-service.service';
import {DotaPlayerInfoModel} from '../../model/dotaPlayerInfo.model';

@Component({
  selector: 'app-playerinfo',
  templateUrl: './playerinfo.component.html',
  styleUrls: ['./playerinfo.component.css']
})
export class PlayerinfoComponent implements OnInit {

  playersInfos: DotaPlayerInfoModel[] = [];
  constructor(playerInfo: PlayerInfoServiceService) {

    playerInfo.getPlayerInfoData().subscribe(b => this.playersInfos = b);
  }

  ngOnInit() {
  }

}
