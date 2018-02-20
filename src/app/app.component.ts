import {Component, OnInit} from '@angular/core';
import { Routes } from '@angular/router';
import { HeroFetcherComponent } from './components/herofetcher/herofetcher.component';
import { PlayerinfoComponent } from './components/playerinfo/playerinfo.component';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {


  }









const appRoutes: Routes = [

  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '/herofetcher',
    component: HeroFetcherComponent },
  { path: '/playerinfo',
    component: PlayerinfoComponent }

];
