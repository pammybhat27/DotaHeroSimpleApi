import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {DotateamService} from '../../services/dotateam.service';
import {Observable} from 'rxjs/Observable';
import {DotaTeamModel} from '../../model/dotaTeam.model';
import {NgxSpinnerService} from 'ngx-spinner';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

export class TeamComponent implements OnInit {

  dataSource = new TeamDataSource(this.teamService);

  displayedColumns = ['team_id', 'rating', 'wins', 'losses', 'last_match_time', 'name', 'tag', 'logo_url'];
  constructor(private teamService: DotateamService, private spinner: NgxSpinnerService) { }

  ngOnInit() {

    this.spinner.show();


    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 10000);

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
