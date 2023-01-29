import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page403Component } from './redirect/page403/page403.component';
import { Page404Component } from './redirect/page404/page404.component';

const routes: Routes = [
  { path: "" ,loadChildren:()=> import('./home/home.module').then( (t)=>t.HomeModule)},
  { path: "403", component: Page403Component },
  { path: "404", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
