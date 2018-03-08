import { Routes } from '@angular/router';
import {HomeComponent} from 'app/home/home.component';
import { HeroFetcherComponent } from 'app/components/herofetcher/herofetcher.component';
import {PlayerinfoComponent} from './components/playerinfo/playerinfo.component';
import {ProplayerComponent} from './components/proplayer/proplayer.component';
import {TeamComponent} from './components/team/team.component';
import {LeagueComponent} from './components/league/league.component';
import {PlayerwinComponent} from './components/playerinfo/playerwin/playerwin.component';
import {PlayerrecentmatchComponent} from './components/playerinfo/playerrecentmatch/playerrecentmatch.component';
import {ProplayerautocompleteComponent} from './components/proplayerautocomplete/proplayerautocomplete.component';
import {ProplayersortingComponent} from './components/proplayersorting/proplayersorting.component';






export const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'herofetcher', component: HeroFetcherComponent},
  {path: 'playerinfo', component: PlayerinfoComponent, children: [
    {path: 'playerwin', component: PlayerwinComponent},
    {path: 'playerrecentmatch', component: PlayerrecentmatchComponent}

  ]},
  {path: 'proplayer', component: ProplayerComponent},
  {path: 'team', component: TeamComponent},
  {path: 'league', component: LeagueComponent},
  {path: 'proplayerautocomplete', component: ProplayerautocompleteComponent},
  {path: 'proplayersorting', component: ProplayersortingComponent},


];

// { path: '', component: ParentComponent, children: [
//   { path: 'red-pill', children: [
//     { path: 'knock-knock', component: SubChildComponent, children: [
//       { path: 'neo', component: SubSubChildComponent }
//     ] },
//   ] },
