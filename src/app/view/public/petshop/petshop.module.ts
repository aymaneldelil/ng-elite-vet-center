import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetshopRoutingModule } from './petshop-routing.module';
import { PetshopComponent } from './petshop/petshop.component';


@NgModule({
  declarations: [
    PetshopComponent
  ],
  imports: [
    CommonModule,
    PetshopRoutingModule
  ]
})
export class PetshopModule { }
