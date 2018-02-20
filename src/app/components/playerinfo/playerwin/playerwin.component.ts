import { Component, OnInit } from '@angular/core';
import {PlayerstatisticsService} from '../../../services/playerstatistics.service';
import {DotaPlayerWinLossModel} from '../../../model/dotaPlayerWinLoss.model';

@Component({
  selector: 'app-playerwin',
  templateUrl: './playerwin.component.html',
  styleUrls: ['./playerwin.component.css']
})
export class PlayerwinComponent implements OnInit {
playerstatisticswinloss: DotaPlayerWinLossModel[] = [];

  constructor(playerstatistics: PlayerstatisticsService ) {
    playerstatistics.getPlayerStatistics().subscribe(b => this.playerstatisticswinloss = b);

  }

  ngOnInit() {
  }

}
