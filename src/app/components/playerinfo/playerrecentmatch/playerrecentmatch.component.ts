import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {DotaRecentPlayerMatchesModel} from '../../../model/dotaRecentPlayerMatches.model';
import {Observable} from 'rxjs/Observable';
import {RecentplayermatchesService} from '../../../services/recentplayermatches.service';

@Component({
  selector: 'app-playerrecentmatch',
  templateUrl: './playerrecentmatch.component.html',
  styleUrls: ['./playerrecentmatch.component.css']
})

export class PlayerrecentmatchComponent implements OnInit {

  dataSource = new PlayerRecentDataSource(this.recentplayerservice);
  constructor(private recentplayerservice: RecentplayermatchesService) { }
  displayedColumns = ['match_id', 'duration', 'game_mode',
    'lobby_type', 'hero_id', 'version',
   'kills', 'deaths', 'assists', 'skill'];

  ngOnInit() {
  }

}

export class PlayerRecentDataSource extends DataSource<any> {
  constructor(private playerrecentmatchservice: RecentplayermatchesService) {
    super();

  }

  connect(): Observable<DotaRecentPlayerMatchesModel[]> {
    return this.playerrecentmatchservice.getRecentPlyerMatch();
  }

  disconnect() {
  }



}

