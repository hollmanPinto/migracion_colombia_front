import { Component, OnInit, ViewChild } from '@angular/core';
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
  data: any;
  options: any;
  data1: any;
  options1: any;
  paises: string[]=[];
  topPaises: number[]=[];
  desc:boolean=true;
  txtBtn:string='Ascendente'
  btnColor:string='p-button-rounded p-button-primary'
  
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
  async iniciar(){
    this.mostrarBarras = true;
    this.barrasHorizontales(32)
  }

  async barrasHorizontales(top:number){
    this.paises = []
    this.topPaises = []
    let topPaises = await this.generalService.topPaises(top);
    this.paises = Object.keys(topPaises)
    this.topPaises = Object.values(topPaises)
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
        labels: this.paises,
        datasets: [
            {
                label: 'Departamentos con mayores denuncias',
                backgroundColor: documentStyle.getPropertyValue('--green-500'),
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                data: this.topPaises
            }
        ]
    };

    this.options = {
        indexAxis: 'y',
        maintainAspectRatio: false,
        aspectRatio: 0.4,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary,
                    font: {
                        weight: 500
                    }
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: true
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };
  }
  async ascendente(){
    if(!this.desc){
        this.descendente()
    }else{
        this.desc = false;
        await this.barrasHorizontales(20);
        this.txtBtn = 'Descendente'
        this.btnColor = 'p-button-rounded p-button-danger'
    }
  }

  async descendente(){
    if(this.desc){
        this.ascendente()
    }else{
        this.desc = true;
        await this.barrasHorizontales(20);
        this.txtBtn = 'Ascendente'
        this.btnColor = 'p-button-rounded p-button-primary'
    }
  }
}
