import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from './section-title/section-title.component';
import { AppointmentToggleComponent } from './appointment-toggle/appointment-toggle.component';
import { AngularMaterialModule } from '../feature/angular-material/angular-material.module';
@NgModule({
  declarations: [
    SectionTitleComponent,
    AppointmentToggleComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports:[
    SectionTitleComponent,
    AppointmentToggleComponent
  ]
})
export class SharedModule { }
