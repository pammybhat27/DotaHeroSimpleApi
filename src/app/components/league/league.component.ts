import { Component, OnInit } from '@angular/core';
import {DotaleagueService} from '../../services/dotaleague.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {DotaLeagueModel} from '../../model/dotaLeague.model';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {
  dataSource = new LeagueDataSource(this.leagueService);
  displayedColumns = ['leagueid', 'banner', 'tier', 'name'];
  constructor( private leagueService: DotaleagueService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();


    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 10000);

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
