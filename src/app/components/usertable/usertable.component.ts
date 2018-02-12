import { Component, OnInit } from '@angular/core';
import {DotaUserService} from '../../services/dota-user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import {DotaHero} from '../../model/dotaHero.model';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['ID', 'Name', 'Localized Name', 'Primary Attribute', 'Attack Type', 'Legs', 'Roles'];
  constructor(private userService: DotaUserService) { }

  ngOnInit() {
  }
}

export class UserDataSource extends DataSource<any> {
  constructor(private userService: DotaUserService) {
    super();
  }
  connect(): Observable<DotaHero[]> {
    return this.userService.getUser();
  }
  disconnect() {}
}
