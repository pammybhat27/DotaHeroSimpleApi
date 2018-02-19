import { Routes } from '@angular/router';
import {HomeComponent} from 'app/home/home.component';
import { HeroFetcherComponent } from 'app/components/herofetcher/herofetcher.component';
import {PlayerinfoComponent} from './components/playerinfo/playerinfo.component';
import {ProplayerComponent} from './components/proplayer/proplayer.component';
import {TeamComponent} from './components/team/team.component';
import {LeagueComponent} from './components/league/league.component';



export const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'herofetcher', component: HeroFetcherComponent},
  {path: 'playerinfo', component: PlayerinfoComponent},
  {path: 'proplayer', component: ProplayerComponent},
  {path: 'team', component: TeamComponent},
  {path: 'league', component: LeagueComponent},

];
