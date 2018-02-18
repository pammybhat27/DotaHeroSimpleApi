import { Component, OnInit } from '@angular/core';
import {DotaHeroFetcherService} from '../../services/dota-heroFetcher.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import {DotaHero} from '../../model/dotaHero.model';

@Component({
  selector: 'app-herofetcher',
  templateUrl: './herofetcher.component.html',
  styleUrls: ['./herofetcher.component.css']
})
export class HeroFetcherComponent implements OnInit {

  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['ID', 'Name', 'Localized Name', 'Primary Attribute', 'Attack Type', 'Legs', 'Roles'];
  constructor(private userService: DotaHeroFetcherService) { }

  ngOnInit() {
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
