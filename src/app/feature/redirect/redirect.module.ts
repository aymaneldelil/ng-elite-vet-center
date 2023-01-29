import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pgae403Component } from './pgae403/pgae403.component';
import { Page403Component } from './page403/page403.component';
import { Page404Component } from './page404/page404.component';



@NgModule({
  declarations: [
    Pgae403Component,
    Page403Component,
    Page404Component
  ],
  imports: [
    CommonModule
  ]
})
export class RedirectModule { }
