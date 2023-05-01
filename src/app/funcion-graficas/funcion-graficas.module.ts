import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionGraficasRoutingModule } from './funcion-graficas-routing.module';
import { FuncionGraficasComponent } from './funcion-graficas.component';


@NgModule({
  declarations: [FuncionGraficasComponent],
  imports: [
    CommonModule,
    FuncionGraficasRoutingModule
  ],
  exports:[FuncionGraficasComponent]
})
export class FuncionGraficasModule { }
