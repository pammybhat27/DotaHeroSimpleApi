import { Component, OnInit } from '@angular/core';
import {DotaHeroFetcherService} from '../../services/dota-heroFetcher.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import {DotaHero} from '../../model/dotaHero.model';
import {NgxSpinnerComponent, NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-herofetcher',
  templateUrl: './herofetcher.component.html',
  styleUrls: ['./herofetcher.component.css']
})
export class HeroFetcherComponent implements OnInit {

  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['ID', 'Primary Attribute', 'Attack Type', 'Legs', 'Roles'];
  constructor(private userService: DotaHeroFetcherService , private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();


    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 10000);

  }
}

export class UserDataSource extends DataSource<any> {
  constructor(private userService: DotaHeroFetcherService) {
    super();
  }
  connect(): Observable<DotaHero[]> {
    return this.userService.getUser();
  }
  disconnect() {}
}
