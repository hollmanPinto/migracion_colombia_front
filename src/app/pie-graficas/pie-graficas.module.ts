import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PieGraficasRoutingModule } from './pie-graficas-routing.module';
import { PieGraficasComponent } from './pie-graficas.component';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [PieGraficasComponent],
  imports: [
    CommonModule,
    PieGraficasRoutingModule,
    ChartModule,
    DropdownModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  exports:[PieGraficasComponent]
})
export class PieGraficasModule { }
