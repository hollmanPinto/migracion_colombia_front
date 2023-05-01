import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PieGraficasRoutingModule } from './pie-graficas-routing.module';
import { PieGraficasComponent } from './pie-graficas.component';
import { ChartModule } from 'primeng/chart';


@NgModule({
  declarations: [PieGraficasComponent],
  imports: [
    CommonModule,
    PieGraficasRoutingModule,
    ChartModule
  ],
  exports:[PieGraficasComponent]
})
export class PieGraficasModule { }
