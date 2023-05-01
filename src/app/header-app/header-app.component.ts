import { Component, OnInit } from '@angular/core';
import { GeneralServicesService } from 'src/services/general-services.service';

@Component({
  selector: 'app-header-app',
  templateUrl: './header-app.component.html',
  styleUrls: ['./header-app.component.css']
})
export class HeaderAppComponent implements OnInit {
  mostrarPieGraphs:boolean=false;
  constructor(
    private generalService:GeneralServicesService,
  ) { }

  ngOnInit(): void {
    this.iniciar();
  }
  iniciar(){
    this.activarHome()
  }
  activarTorta(){
    this.generalService.mostrarPie(true);
  }
  activarBarras(){
    this.generalService.mostrarBarras(true);
  }
  activarFunciones(){
    this.generalService.mostrarFunciones(true);
  }
  activarHome(){
    this.generalService.mostrarHome(true);
  }
}
