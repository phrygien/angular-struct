import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './_utils/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  // pour declarer les module a utiliser
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // pour dire quelle page va demarer par defaut
})
export class AppModule { }
