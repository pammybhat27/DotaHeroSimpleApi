import { Component, OnInit } from '@angular/core';
import {DotaProPlayerModel} from '../../model/dotaProPlayer.model';
import {ProplayerService} from '../../services/proplayer.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

@Component({
  selector: 'app-proplayerautocomplete',
  templateUrl: './proplayerautocomplete.component.html',
  styleUrls: ['./proplayerautocomplete.component.css']
})
export class ProplayerautocompleteComponent implements OnInit {
proplayerAutoComplete: DotaProPlayerModel[] = [];
  stateCtrl: FormControl;
  filteredOptions: Observable<any[]>;

  constructor(proplayerCompleter: ProplayerService) {
    proplayerCompleter.getProPlayer().subscribe(d => this.proplayerAutoComplete = d);

    console.log(this.proplayerAutoComplete);

    this.stateCtrl = new FormControl();
    this.filteredOptions = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterStates(state) : this.proplayerAutoComplete.slice())
      );
  }

  ngOnInit() {

  }

  filterStates(name: string) {
    return this.proplayerAutoComplete.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }




}
