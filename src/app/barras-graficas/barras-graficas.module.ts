import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarrasGraficasRoutingModule } from './barras-graficas-routing.module';
import { BarrasGraficasComponent } from './barras-graficas.component';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [BarrasGraficasComponent],
  imports: [
    CommonModule,
    BarrasGraficasRoutingModule,
    ChartModule,
    ButtonModule,
  ],
  exports:[BarrasGraficasComponent]
})
export class BarrasGraficasModule { }
