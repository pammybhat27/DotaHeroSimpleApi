import { Routes } from '@angular/router';
import {HomeComponent} from 'app/home/home.component';
import { HeroFetcherComponent } from 'app/components/herofetcher/herofetcher.component';
import {PlayerinfoComponent} from "./playerinfo/playerinfo.component";
import {ProplayerComponent} from "./proplayer/proplayer.component";



export const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'herofetcher', component: HeroFetcherComponent},
  {path: 'playerinfo', component: PlayerinfoComponent},
  {path: 'proplayer', component: ProplayerComponent},


];
