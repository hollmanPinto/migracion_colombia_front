import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GeneralServicesService } from 'src/services/general-services.service';

@Component({
  selector: 'app-pie-graficas',
  templateUrl: './pie-graficas.component.html',
  styleUrls: ['./pie-graficas.component.css']
})
export class PieGraficasComponent implements OnInit {
  data: any;
  options: any;
  mostrarPie:boolean=false;
  private subscription:Subscription
  constructor(
    private generalService:GeneralServicesService
  ) { }

  ngOnInit() {
    this.subscription = this.generalService.pieMostrarSubs.subscribe( valor =>{
      console.log('entro por subs')
      if(valor){
        this.iniciar()
        this.generalService.mostrarBarras(false); //ocultar barras
        this.generalService.mostrarFunciones(false); //ocultar funciones
        this.generalService.mostrarHome(false); //ocultar home
      }else{
        this.mostrarPie=false;
      }
    },
    error =>{
      console.log("error en la subscripcion", error)
    });
  }

  iniciar(){
    this.mostrarPie=true;
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
        }
            ]
        };
        this.options = {
          plugins: {
            legend: {
              labels: {
                usePointStyle: true,
                color: textColor
                  }
              }
            }
        };
  }
}
