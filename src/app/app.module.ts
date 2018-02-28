import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatSliderModule, MatSort, MatSortable,
  MatTableModule
} from '@angular/material';
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
import {NgxSpinnerModule} from 'ngx-spinner';
import {PlayerstatisticsService} from './services/playerstatistics.service';
import {PlayerwinComponent} from './components/playerinfo/playerwin/playerwin.component';
import { RecentplayermatchesService } from './services/recentplayermatches.service';
import {PlayerrecentmatchComponent} from './components/playerinfo/playerrecentmatch/playerrecentmatch.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProplayerautocompleteComponent} from './components/proplayerautocomplete/proplayerautocomplete.component';
import {ProplayersortingComponent} from './components/proplayersorting/proplayersorting.component';
import {MatSortModule} from '@angular/material/sort';

@NgModule(<NgModule>{
  declarations: [AppComponent,
    HeroFetcherComponent,
    HomeComponent,
    PlayerinfoComponent,
    ProplayerComponent,
    TeamComponent,
    LeagueComponent,
    PlayerwinComponent,
    PlayerrecentmatchComponent,
    ProplayerautocompleteComponent,
    ProplayersortingComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    RouterModule.forRoot(routes),
    NgxSpinnerModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatSortModule

  ],
  providers: [
    DotaHeroFetcherService,
    PlayerInfoServiceService,
    ProplayerService,
    DotateamService,
    DotaleagueService,
    PlayerstatisticsService,
    RecentplayermatchesService,

              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
