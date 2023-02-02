import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetshopComponent } from './petshop/petshop.component';

const routes: Routes = [
  { path: "" , component:PetshopComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetshopRoutingModule { }
