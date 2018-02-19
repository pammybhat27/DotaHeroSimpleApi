import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroFetcherComponent } from './components/herofetcher/herofetcher.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DotaHeroFetcherService} from './services/dota-heroFetcher.service';
import { RouterModule, Routes  } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {routes} from './app.routes';
import {PlayerInfoServiceService} from './services/player-info-service.service';
import {PlayerinfoComponent} from './components/playerinfo/playerinfo.component';
import {DotaPlayerInfoModel} from './model/dotaPlayerInfo.model';
import {ProplayerService} from './services/proplayer.service';
import {ProplayerComponent} from './components/proplayer/proplayer.component';
import {DotateamService} from './services/dotateam.service';
import {DotaTeamModel} from './model/dotaTeam.model';
import {TeamComponent} from './components/team/team.component';
import {LeagueComponent} from './components/league/league.component';
import {DotaleagueService} from './services/dotaleague.service';

@NgModule(<NgModule>{
  declarations: [AppComponent,
    HeroFetcherComponent,
    HomeComponent,
    PlayerinfoComponent,
    ProplayerComponent,
    TeamComponent,
    LeagueComponent

  ],
  imports: [BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    RouterModule.forRoot(routes)],
  providers: [DotaHeroFetcherService,
              PlayerInfoServiceService,
              ProplayerService,
              DotateamService,
              DotaleagueService
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
