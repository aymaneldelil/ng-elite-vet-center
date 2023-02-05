import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./view/public/home/home.module').then((t) => t.HomeModule),
  },
  {
    path: 'petshop',
    loadChildren: () =>
      import('./view/public/petshop/petshop.module').then(
        (t) => t.PetshopModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./view/public/auth/auth.module').then((t) => t.AuthModule),
  },
  {
    path: 'appointment',
    loadChildren: () =>
      import('./view/private/appointment/appointment.module').then(
        (t) => t.AppointmentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
