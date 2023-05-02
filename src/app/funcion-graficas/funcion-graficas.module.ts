import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionGraficasRoutingModule } from './funcion-graficas-routing.module';
import { FuncionGraficasComponent } from './funcion-graficas.component';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [FuncionGraficasComponent],
  imports: [
    CommonModule,
    FuncionGraficasRoutingModule,
    ChartModule
  ],
  exports:[FuncionGraficasComponent]
})
export class FuncionGraficasModule { }
