import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderAppRoutingModule } from './header-app-routing.module';
import { ButtonModule } from 'primeng/button';
import { HeaderAppComponent } from './header-app.component';
import { PieGraficasModule } from '../pie-graficas/pie-graficas.module';


@NgModule({
  declarations: [HeaderAppComponent],
  imports: [
    CommonModule,
    HeaderAppRoutingModule,
    ButtonModule,
    PieGraficasModule
  ],
  exports:[HeaderAppComponent]
})
export class HeaderAppModule { }
