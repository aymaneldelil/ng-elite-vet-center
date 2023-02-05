import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentComponent } from './appointment/appointment.component';
import { AngularMaterialModule } from 'src/app/feature/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { appointmentRoutingModule } from './appointment-routing';
import { SharedModule } from 'src/app/shared/shared.module';
//---------------------------------------------------------------------------------------------------------------------------------------------
@NgModule({
  declarations: [
    AppointmentComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    appointmentRoutingModule,
    SharedModule
  ]
})
export class AppointmentModule { }
