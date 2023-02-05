import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceItemComponent } from './components/service-item/service-item.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';

//---------------------------------------------------------------------------------------------------------------------------------------------

@NgModule({
  declarations: [
    ServiceItemComponent,
    ServiceDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ServiceItemComponent,
    ServiceDetailsComponent
  ]
})
export class ServicesModule { }
