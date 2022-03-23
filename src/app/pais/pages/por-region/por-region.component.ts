import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right:5px;
    }
    `
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU',
            'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC']

  regionActiva: string ='';
  paises: Country[] = [];

  region: string = "";


  constructor( private paisService: PaisService) { }

    ngOnInit(): void {
    }

  activarRegion (region: string){
    this.regionActiva = region;
  }

  getClaseCSS( region: string){
    return (region === this.regionActiva)
          ? 'btn btn-primary'
          : 'btn btn-outline-primary';
  }

  buscar(region: string){

    if (region === this.region) { return;}
    this.region =region;

    console.log(region);

    this.paisService.buscarRegion(this.region)
      .subscribe( paises => this.paises = paises );

  }

    //TODO: Hacer llamado

}
