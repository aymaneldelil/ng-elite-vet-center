import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { FooterComponent } from './components/footer/footer.component';
import { HNavbarComponent } from './components/h-navbar/h-navbar.component';
import { AngularMaterialModule } from '../feature/angular-material/angular-material.module';

@NgModule({
  declarations: [
    FooterComponent,
    HNavbarComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports:[
    FooterComponent,
    HNavbarComponent
  ]
  ,
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
