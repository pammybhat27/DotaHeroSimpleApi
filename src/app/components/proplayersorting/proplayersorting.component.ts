import { Component, OnInit } from '@angular/core';
import {DotaProPlayerModel} from '../../model/dotaProPlayer.model';
import {ProplayerService} from '../../services/proplayer.service';
import {Sort} from '@angular/material';

@Component({
  selector: 'app-proplayersorting',
  templateUrl: './proplayersorting.component.html',
  styleUrls: ['./proplayersorting.component.css']
})
export class ProplayersortingComponent {
  proplayerSorting: DotaProPlayerModel[] = [];

  sortedData;

  constructor(proplayerCompleter: ProplayerService) {
    proplayerCompleter.getProPlayer().subscribe(completer => this.proplayerSorting = completer);

    // this.sortedData = this.proplayerSorting.slice();
     // console.log(this.sortedData.slice());
  }

  sortData(sort: Sort) {
    console.log('EVENT BC');
    const data = this.proplayerSorting.slice();
    console.log(this.proplayerSorting.slice());
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }


    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);

        case 'account_id':
          return compare(a.account_id, b.account_id, isAsc);

        case 'country_code':
          return compare(a.country_code, b.country_code, isAsc);


        case 'personaname':
          return compare(a.personaname, b.personaname, isAsc);

        case 'team_name':
          return compare(a.team_name, b.team_name, isAsc);

        default:
          return 0;
      }
    });



    function compare(a, b, isAsc) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }


  }


}
