import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TablaArticulosComponent } from './tabla-articulos/tabla-articulos.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaArticulosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
