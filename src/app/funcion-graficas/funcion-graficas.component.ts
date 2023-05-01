import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GeneralServicesService } from 'src/services/general-services.service';

@Component({
  selector: 'app-funcion-graficas',
  templateUrl: './funcion-graficas.component.html',
  styleUrls: ['./funcion-graficas.component.css']
})
export class FuncionGraficasComponent implements OnInit {
  private subscription:Subscription;
  mostrarFunciones = false;
  constructor(
    private generalService:GeneralServicesService
  ) { }

  ngOnInit(): void {
    this.subscription = this.generalService.funcionesMostrarSubs.subscribe( valor =>{
      console.log('entro por subs')
      if(valor){
        this.iniciar()
        this.generalService.mostrarBarras(false); //ocultar barras
        this.generalService.mostrarPie(false); //ocultar pie
        this.generalService.mostrarHome(false); //ocultar home
      }else{
        this.mostrarFunciones=false;
      }
    },
    error =>{
      console.log("error en la subscripcion", error)
    });
  }

  iniciar(){
    this.mostrarFunciones=true;
  }
}
