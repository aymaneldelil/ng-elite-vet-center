import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material/angular-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page403Component } from './redirect/page403/page403.component';
import { Page404Component } from './redirect/page404/page404.component';


@NgModule({
  declarations: [
    AppComponent,
    Page403Component,
    Page404Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
