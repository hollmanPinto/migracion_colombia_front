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
  data:any;
  options:any;
  basicData: any;
  basicOptions: any;
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

  async iniciar(){
    this.mostrarFunciones=true;
    let data:[] = await this.generalService.cantidadMesesAnios()
    this.graficaFuncion(data)
  }

  graficaFuncion(data){
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    
    let keys = Object.keys(data[0]);
    let values2012 = Object.values(data[0]);
    let values2013 = Object.values(data[1]);
    let values2014 = Object.values(data[2]);
    let values2015 = Object.values(data[3]);
    let values2016 = Object.values(data[4]);
    let values2017 = Object.values(data[5]);
    let values2018 = Object.values(data[6]);
    let values2019 = Object.values(data[7]);
    let values2020 = Object.values(data[8]);
    let values2021 = Object.values(data[9]);
    let values2022 = Object.values(data[10]);

    let meses = keys.slice(0, -1)
    let anio2012 = values2012.slice(0, -1)
    let anio2013 = values2013.slice(0, -1)
    let anio2014 = values2014.slice(0, -1)
    let anio2015 = values2015.slice(0, -1)
    let anio2016 = values2016.slice(0, -1)
    let anio2017 = values2017.slice(0, -1)
    let anio2018 = values2018.slice(0, -1)
    let anio2019 = values2019.slice(0, -1)
    let anio2020 = values2020.slice(0, -1)
    let anio2021 = values2021.slice(0, -1)
    let anio2022 = values2022.slice(0, -1)
    //console.log(data)
    console.log(meses)
    this.data = {
        labels: meses,
        datasets: [
            {
                label: 'Año 2012',
                data: anio2012,
                fill: false,
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                tension: 0.4
            },
            {
                label: 'Año 2013',
                data: anio2013,
                fill: false,
                borderColor: documentStyle.getPropertyValue('--pink-500'),
                tension: 0.4
            },
            {
              label: 'Año 2014',
              data: anio2014,
              fill: false,
              borderColor: documentStyle.getPropertyValue('--red-500'),
              tension: 0.4
          },
            {
                label: 'Año 2015',
                data: anio2015,
                fill: false,
                borderColor: documentStyle.getPropertyValue('--yellow-500'),
                tension: 0.4
            },
            {
              label: 'Año 2016',
              data: anio2016,
              fill: false,
              borderColor: documentStyle.getPropertyValue('--green-500'),
              tension: 0.4
          },
          {
            label: 'Año 2017',
            data: anio2017,
            fill: false,
            borderColor: documentStyle.getPropertyValue('--gray-500'),
            tension: 0.4
        },
        {
          label: 'Año 2018',
          data: anio2018,
          fill: false,
          borderColor: documentStyle.getPropertyValue('--purple-500'),
          tension: 0.4
      },
      {
        label: 'Año 2019',
        data: anio2019,
        fill: false,
        borderColor: documentStyle.getPropertyValue('--orange-500'),
        tension: 0.4
    },
    {
      label: 'Año 2020',
      data: anio2020,
      fill: false,
      borderColor: documentStyle.getPropertyValue('--pink-500'),
      tension: 0.4
  },
  {
    label: 'Año 2021',
    data: anio2021,
    fill: false,
    borderColor: documentStyle.getPropertyValue('--blue-500'),
    tension: 0.4
},
{
  label: 'Año 2022',
  data: anio2022,
  fill: false,
  borderColor: documentStyle.getPropertyValue('--yellow-500'),
  tension: 0.4
},
        ]
    };

    this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
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
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
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
}
