import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnviarRutaRoutingModule } from './enviar-ruta-routing.module';
import { EnviarRutaComponent } from './enviar-ruta.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [EnviarRutaComponent],
  imports: [
    CommonModule,
    EnviarRutaRoutingModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    TableModule,
    ReactiveFormsModule,
    DropdownModule,
  ],
  exports:[
    EnviarRutaComponent
  ]
})
export class EnviarRutaModule { }
