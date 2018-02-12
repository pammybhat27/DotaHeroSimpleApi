import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsertableComponent } from './components/usertable/usertable.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DotaUserService} from './services/dota-user.service';


@NgModule({
  declarations: [
    AppComponent,
    UsertableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [DotaUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
