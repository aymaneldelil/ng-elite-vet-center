import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { AngularMaterialModule } from 'src/app/feature/angular-material/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServicesModule } from 'src/app/feature/services/services.module';
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    AngularMaterialModule,
    ServicesModule
  ]
})
export class HomeModule { }
