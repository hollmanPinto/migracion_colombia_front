import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarrasGraficasRoutingModule } from './barras-graficas-routing.module';
import { BarrasGraficasComponent } from './barras-graficas.component';
import { ChartModule } from 'primeng/chart';


@NgModule({
  declarations: [BarrasGraficasComponent],
  imports: [
    CommonModule,
    BarrasGraficasRoutingModule,
    ChartModule,
  ],
  exports:[BarrasGraficasComponent]
})
export class BarrasGraficasModule { }
