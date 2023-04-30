import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enviar-ruta',
  templateUrl: './enviar-ruta.component.html',
  styleUrls: ['./enviar-ruta.component.css']
})
export class EnviarRutaComponent implements OnInit {
  ruta:string='';
  constructor() { }

  ngOnInit(): void {
    this.iniciar();
  }
  iniciar(){

  }
  enviarRuta(){
    console.log(this.ruta)
  }
}
