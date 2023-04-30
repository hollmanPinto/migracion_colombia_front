import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnviarRutaRoutingModule } from './enviar-ruta-routing.module';
import { EnviarRutaComponent } from './enviar-ruta.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [EnviarRutaComponent],
  imports: [
    CommonModule,
    EnviarRutaRoutingModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
  ],
  exports:[
    EnviarRutaComponent
  ]
})
export class EnviarRutaModule { }
