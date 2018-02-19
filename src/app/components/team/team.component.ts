import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {DotateamService} from '../../services/dotateam.service';
import {Observable} from 'rxjs/Observable';
import {DotaTeamModel} from '../../model/dotaTeam.model';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

export class TeamComponent implements OnInit {

  dataSource = new TeamDataSource(this.teamService);

  displayedColumns = ['team_id', 'rating', 'wins', 'losses', 'last_match_time', 'name', 'tag', 'logo_url'];
  constructor(private teamService: DotateamService) { }

  ngOnInit() {
  }

}
export class TeamDataSource extends DataSource<any> {

  constructor(private teamService: DotateamService) {
    super();
  }

  connect(): Observable<DotaTeamModel[]> {
    return this.teamService.getTeam();
  }

  disconnect() {
  }

}
