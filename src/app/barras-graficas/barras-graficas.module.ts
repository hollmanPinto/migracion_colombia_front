import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarrasGraficasRoutingModule } from './barras-graficas-routing.module';
import { BarrasGraficasComponent } from './barras-graficas.component';


@NgModule({
  declarations: [BarrasGraficasComponent],
  imports: [
    CommonModule,
    BarrasGraficasRoutingModule
  ],
  exports:[BarrasGraficasComponent]
})
export class BarrasGraficasModule { }
