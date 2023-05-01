import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CapsulaBoolean } from 'src/models/capsula-boolean';
import { MigracionColombia } from 'src/models/migracion-colombia';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GeneralServicesService {
  urlCargarCsv='http://127.0.0.1:8000/api/v1/loadCsv';
  urlInfo='http://127.0.0.1:8000/api/v1/verData';
  activarGraphTorta:boolean=false
  activarPie:boolean=false;
  pieMostrarSubs = new BehaviorSubject<boolean>(false);
  barrasMostrarSubs = new BehaviorSubject<boolean>(false);
  funcionesMostrarSubs = new BehaviorSubject<boolean>(false);
  homeMostrarSubs = new BehaviorSubject<boolean>(false);
  constructor(
    private http:HttpClient
  ) { }
    ngOnInit(){
      
    }

  enviarUrlCsv(ruta:string): Promise<CapsulaBoolean> {
    let body={
      "ruta":ruta
    }
    return this.http.post<CapsulaBoolean>(this.urlCargarCsv,body).toPromise();
  }

  tablaInfo(anio:string, mes:string ,cantidad:string, nacionalidad:string): Promise<MigracionColombia[]> {
    let body={
      "anio":""+anio,
      "mes":mes,
      "cantidad":cantidad,
      "nacionalidad":nacionalidad
    }
    return this.http.post<MigracionColombia[]>(this.urlInfo,body).toPromise();
  }

  mostrarPie(data:boolean){//aqui emito el valor
    this.pieMostrarSubs.next(data)
  }
  mostrarBarras(data:boolean){
    this.barrasMostrarSubs.next(data)
  }
  mostrarFunciones(data:boolean){
    this.funcionesMostrarSubs.next(data)
  }
  mostrarHome(data:boolean){
    this.homeMostrarSubs.next(data)
  } 
}
