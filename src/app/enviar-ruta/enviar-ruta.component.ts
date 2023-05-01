import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MigracionColombia } from 'src/models/migracion-colombia';
import { GeneralServicesService } from 'src/services/general-services.service';

@Component({
  selector: 'app-enviar-ruta',
  templateUrl: './enviar-ruta.component.html',
  styleUrls: ['./enviar-ruta.component.css']
})
export class EnviarRutaComponent implements OnInit {
  ruta:string='';
  mostrarTabla:boolean=false;
  migraciones:MigracionColombia[]=[];
  datosGenerar:FormGroup;
  mostrarForm:boolean=false;
  cantidad:string='';
  anioGenerar:string='';
  nacionalidad:string='';
  mesGenerar:string='';
  mostrarHome:boolean=true;
  private subscription:Subscription;
  constructor(
    private generalService:GeneralServicesService
  ) { }

  ngOnInit(): void {
    console.log('entro por init '+this.mostrarHome)
    this.mostrarHome = true;
    this.subscription = this.generalService.homeMostrarSubs.subscribe( valor =>{
      console.log('entro por subs')
      if(valor){
        this.mostrarHome = true;
        this.iniciar()
        this.generalService.mostrarBarras(false); //ocultar barras
        this.generalService.mostrarPie(false); //ocultar pie
        this.generalService.mostrarFunciones(false) //ocultar funciones
      }else{
        this.mostrarHome=false;
      }
    },
    error =>{
      console.log("error en la subscripcion", error)
    });
  }
  iniciar(){

  }

  async enviarRuta(){
    console.log(this.ruta)
    let enviarCsv = await this.generalService.enviarUrlCsv(this.ruta);
    this.mostrarTabla = enviarCsv?enviarCsv.valor:false;
    if(this.mostrarTabla){
      let tablaInfo:MigracionColombia[] = await this.generalService.tablaInfo('2012','','5','alemania');
      this.migraciones = tablaInfo;
      console.log(this.migraciones)
      this.mostrarForm = true;
    }else{
      console.log('ha ocurrido un error con la ruta')
    }
  }
  async solicitarTabla(){
    let tablaInfo:MigracionColombia[] = await this.generalService.tablaInfo(this.anioGenerar
      ,this.mesGenerar,this.cantidad,this.nacionalidad);
    this.migraciones = tablaInfo;
  }
}
