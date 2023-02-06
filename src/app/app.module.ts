import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//-------
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader } from '@ngx-translate/core/public_api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // TranslateModule.forRoot(
    //   {
    //     defaultLanguage:'en',
    //     loader:{
    //       provide:TranslateLoader,
    //       useFactory:HttpLoaderFactory,
    //       deps:[HttpClient]
    //     }
    //   }
    // ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
//---------------------------------------------------------------------------------------------------------------------------------------------

export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http ,'./assets/i18n/','.json')
}
