import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EnviarRutaModule } from './enviar-ruta/enviar-ruta.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderAppComponent } from './header-app/header-app.component';
import { HeaderAppModule } from './header-app/header-app.module';
import { PieGraficasComponent } from './pie-graficas/pie-graficas.component';
import { PieGraficasModule } from './pie-graficas/pie-graficas.module';
import { BarrasGraficasComponent } from './barras-graficas/barras-graficas.component';
import { BarrasGraficasModule } from './barras-graficas/barras-graficas.module';
import { FuncionGraficasComponent } from './funcion-graficas/funcion-graficas.component';
import { FuncionGraficasModule } from './funcion-graficas/funcion-graficas.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    EnviarRutaModule,
    ScrollingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HeaderAppModule,
    PieGraficasModule,
    BarrasGraficasModule,
    FuncionGraficasModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
