import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EnviarRutaModule } from './enviar-ruta/enviar-ruta.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EnviarRutaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
