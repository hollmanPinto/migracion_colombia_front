import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionGraficasRoutingModule } from './funcion-graficas-routing.module';
import { FuncionGraficasComponent } from './funcion-graficas.component';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [FuncionGraficasComponent],
  imports: [
    CommonModule,
    FuncionGraficasRoutingModule,
    ChartModule,
    TableModule,
  ],
  exports:[FuncionGraficasComponent]
})
export class FuncionGraficasModule { }
