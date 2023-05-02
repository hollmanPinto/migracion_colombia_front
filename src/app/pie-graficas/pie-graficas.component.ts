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
  dataDon: any;
  optDon: any;
  dataPolar: any;
  optPolar: any;
  mostrarPie:boolean=false;
  anioInicial:string="";
  anioFinal:string="";
  anioInicialHm:string="";
  anioFinalHm:string="";
  anioInicialPolar:string='';
  anioFinalPolar:string='';
  listaAnios:string[]=['2012'];
  opciones = [
    { label: '2012', value: "2012" },
    { label: '2013', value: "2013" },
    { label: '2014', value: "2014" },
    { label: '2015', value: "2015" },
    { label: '2016', value: "2016" },
    { label: '2017', value: "2017" },
    { label: '2018', value: "2018" },
    { label: '2019', value: "2019" },
    { label: '2020', value: "2020" },
    { label: '2021', value: "2021" },
    { label: '2022', value: "2022" },
  ];
  private subscription:Subscription
  constructor(
    private generalService:GeneralServicesService
  ) { }

  ngOnInit() {
    console.log('entro por pie')
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
    this.graficoTorta();
    this.graficoDon();
    this.graficoPolar();
  }

  async graficoTorta(){
    let data = await this.generalService.personasAnio('2012-2013');
    let listaAnios:string[]=[];
    let listaValores:number[]=[];
    for (let key in data) {
      listaAnios.push(key)
      listaValores.push(Number(data[key]))
    }
    this.generarPie(listaAnios,listaValores)
  }

  async filtrarPersonasXanio(){
    let anios:string = `${this.anioInicial}-${this.anioFinal}`
    let data = await this.generalService.personasAnio(anios);
    let listaAnios:string[]=[];
    let listaValores:number[]=[];
    for (let key in data) {
      listaAnios.push(key)
      listaValores.push(Number(data[key]))
    }
    this.generarPie(listaAnios,listaValores)
  }

  generarPie(listaAnios:string[],listaValores:number[]){
    this.mostrarPie=true;
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    this.data = {
      labels: listaAnios,
      datasets: [
        {
          data: listaValores,
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
//PARA GENERAR DONOUT**************************************************
  async graficoDon(){
    let data = await this.generalService.proporcionHm('2012-2013');
    let listaAnios:string[]=[];
    let listaValores:number[]=[];
    for (let key in data) {
      listaAnios.push(key)
      listaValores.push(Number(data[key]))
    }
    this.generarDon(listaAnios,listaValores)
  }

  async proporcionHmXanios(){
    let anios:string = `${this.anioInicialHm}-${this.anioFinalHm}`
    let data = await this.generalService.proporcionHm(anios);
    let listaAnios:string[]=[];
    let listaValores:number[]=[];
    for (let key in data) {
      listaAnios.push(key)
      listaValores.push(Number(data[key]))
    }
    this.generarDon(listaAnios,listaValores)
  }

  generarDon(listaAnios:string[],listaValores:number[]){
    this.mostrarPie=true;
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    this.dataDon = {
      labels: listaAnios,
      datasets: [
        {
          data: listaValores,
          backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
        }
            ]
        };
        this.optDon = {
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
  //para generar polar **************************************************************
  async graficoPolar(){
    let data = await this.generalService.migrantesTrimestre('2012-2013');
    let listaAnios:string[]=[];
    let listaValores:number[]=[];
    let trimestre:string="";
    for (let key in data) {
      if(key==='trim1'){
        trimestre="1 Trimestre"
      }else if(key==='trim2'){
        trimestre="2 Trimestre"
      }else if(key==='trim3'){
        trimestre="3 Trimestre"
      }else if(key==='trim4'){
        trimestre="4 Trimestre"
      }
      listaAnios.push(trimestre)
      listaValores.push(Number(data[key]))
    }
    this.generarPolar(listaAnios,listaValores)
  }

  async migracionXtrim(){
    let anios:string = `${this.anioInicialPolar}-${this.anioFinalPolar}`
    let data = await this.generalService.migrantesTrimestre(anios);
    let listaAnios:string[]=[];
    let listaValores:number[]=[];
    let trimestre:string="";
    for (let key in data) {
      if(key==='trim1'){
        trimestre="1 Trimestre"
      }else if(key==='trim2'){
        trimestre="2 Trimestre"
      }else if(key==='trim3'){
        trimestre="3 Trimestre"
      }else if(key==='trim4'){
        trimestre="4 Trimestre"
      }
      listaAnios.push(trimestre)
      listaValores.push(Number(data[key]))
    }
    this.generarPolar(listaAnios,listaValores)
  }

  generarPolar(listaAnios:string[],listaValores:number[]){
    this.mostrarPie=true;
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    this.dataPolar = {
      labels: listaAnios,
      datasets: [
        {
          data: listaValores,
          backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
        }
            ]
        };
        this.optPolar = {
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
