import { Component, OnInit } from '@angular/core';
import {ProplayerService} from '../../services/proplayer.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {DotaProPlayerModel} from '../../model/dotaProPlayer.model';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-proplayer',
  templateUrl: './proplayer.component.html',
  styleUrls: ['./proplayer.component.css']
})
export class ProplayerComponent implements OnInit {

  dataSource = new ProplayerDataSource(this.proplayerService);
  displayedColumns = ['Account_id', 'avatar', 'profileurl', 'personaname', 'name', 'country_code', 'team_name'];
  constructor(private proplayerService: ProplayerService, private spinner: NgxSpinnerService ) { }


// yaay used spinner like a boss
  ngOnInit() {
    this.spinner.show();


    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 10000);

  }

}

/// Multiple arrays returned an save as an object
export class ProplayerDataSource extends DataSource<any> {
  constructor(private proplayerService: ProplayerService) {
    super();
  }
  connect(): Observable<DotaProPlayerModel[]> {
    return this.proplayerService.getProPlayer();
  }
  disconnect() {}
}
