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
  urlPersonasAnio='http://127.0.0.1:8000/api/v1/crimenesXanio';
  urlPoporcionHm='http://127.0.0.1:8000/api/v1/proporcionHm';
  urlMigrantesTrim='http://127.0.0.1:8000/api/v1/delitosXanio';
  urlTopPaises='http://127.0.0.1:8000/api/v1/topPaises';
  urlMesAnioCantidad='http://127.0.0.1:8000/api/v1/cantidadMesesAnios';
  urlEstadistica='http://127.0.0.1:8000/api/v1/estadistica';

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
  personasAnio(rangoAnios:string): Promise<any>{
    let body = {
      rangoAnios:rangoAnios
    }
    return this.http.post<any>(this.urlPersonasAnio,body).toPromise();
  }
  proporcionHm(rangoAnios:string): Promise<any>{
    let body = {
      rangoAnios:rangoAnios
      }
    return this.http.post<any>(this.urlPoporcionHm,body).toPromise();
  }
  migrantesTrimestre(rangoAnios:string): Promise<any>{
    let body = {
      rangoAnios:rangoAnios
      }
      return this.http.post<any>(this.urlMigrantesTrim,body).toPromise();
  }
  topPaises(top:number): Promise<any>{
    let body = {
      top:top
    }
    return this.http.post<any>(this.urlTopPaises,body).toPromise();
  }
  cantidadMesesAnios(): Promise<any>{
    return this.http.get<any>(this.urlMesAnioCantidad).toPromise();
  }
  estadistica():Promise<any>{
    return this.http.get<any>(this.urlEstadistica).toPromise();
  }

  mostrarPie(data:boolean){//aqui emito el valor
    this.pieMostrarSubs.next(data)
  }
  mostrarBarras(data:boolean){
    this.barrasMostrarSubs.next(data)
    return;
  }
  mostrarFunciones(data:boolean){
    this.funcionesMostrarSubs.next(data)
    return;
  }
  mostrarHome(data:boolean){
    this.homeMostrarSubs.next(data)
    return;
  } 
}
