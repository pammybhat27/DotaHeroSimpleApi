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
import {PlayerinfoComponent} from './playerinfo/playerinfo.component';
import {DotaPlayerInfoModel} from './model/dotaPlayerInfo.model';
import {ProplayerService} from './services/proplayer.service';
import {ProplayerComponent} from './proplayer/proplayer.component';

@NgModule(<NgModule>{
  declarations: [AppComponent,
    HeroFetcherComponent,
    HomeComponent,
    PlayerinfoComponent,
    ProplayerComponent


  ],
  imports: [BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    RouterModule.forRoot(routes)],
  providers: [DotaHeroFetcherService,
              PlayerInfoServiceService,
              ProplayerService
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
