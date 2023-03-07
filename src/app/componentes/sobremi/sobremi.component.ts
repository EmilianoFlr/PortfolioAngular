import { Component } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent {
  constructor(private datosportfolio: ServicioService) {
    this.datosportfolio.obtenerDatos().subscribe(datos => { console.log(datos); });
  }
}
