import { Component, OnInit } from '@angular/core';
import { Capital } from '../../interfaces/capital.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino   : string = "";
  hayError  : boolean = false;
  paises : Capital[] = [];

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
  }

  buscar (termino: string){

    this.termino  = termino;
    this.hayError = false;

    console.log(this.termino);

    this.paisService.buscarCapital(this.termino)
      .subscribe( (paises) => {
        this.paises= paises;
        // console.log(this.paises);
      }, (err) =>{
        this.hayError = true;
        this.paises =[];
      });
  }

  sugerencias(termino: string){
    this.hayError = false;
  }

}
