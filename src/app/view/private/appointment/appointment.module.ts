import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentComponent } from './appointment/appointment.component';
import { AngularMaterialModule } from 'src/app/feature/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';


//---------------------------------------------------------------------------------------------------------------------------------------------
@NgModule({
  declarations: [
    AppointmentComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class AppointmentModule { }
