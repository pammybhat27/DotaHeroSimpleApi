import { Component, OnInit } from '@angular/core';
import {DotaleagueService} from '../../services/dotaleague.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {DotaLeagueModel} from '../../model/dotaLeague.model';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {
  dataSource = new LeagueDataSource(this.leagueService);
  displayedColumns = ['leagueid', 'ticket', 'banner', 'tier', 'name'];
  constructor( private leagueService: DotaleagueService) { }

  ngOnInit() {
  }

}

export class LeagueDataSource extends DataSource <any> {

  constructor( private leagueService: DotaleagueService) {
    super();
  }

  connect(): Observable<DotaLeagueModel[]> {
    return this.leagueService.getLeague();
  }

  disconnect() {
  }



}
