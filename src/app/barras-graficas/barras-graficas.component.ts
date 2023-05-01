import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GeneralServicesService } from 'src/services/general-services.service';

@Component({
  selector: 'app-barras-graficas',
  templateUrl: './barras-graficas.component.html',
  styleUrls: ['./barras-graficas.component.css']
})
export class BarrasGraficasComponent implements OnInit {
  private subscription:Subscription;
  mostrarBarras:boolean=false;
  constructor(
    private generalService:GeneralServicesService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.generalService.barrasMostrarSubs.subscribe( valor =>{
      console.log('entro por subs')
      if(valor){
        this.iniciar()
        this.generalService.mostrarFunciones(false) //ocultar funciones
        this.generalService.mostrarPie(false) //ocultar pie
        this.generalService.mostrarHome(false) //ocultar home
      }else{
        this.mostrarBarras=false;
      }
    },
    error =>{
      console.log("error en la subscripcion", error)
    });
  }
  iniciar(){
    this.mostrarBarras = true;
  }
}
