import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent  {

  termino: string = '';
  hayError: boolean = false;
  paises : Country[] = [];  

  constructor( private paisService: PaisService) { }

  buscar( termino : string) {
    this.hayError = false;
    this.termino = termino;
    this.paises = [];

    this.paisService.buscarPais( this.termino ).subscribe( paises => {
      this.paises = paises;
      console.log(paises);
    }, (err) => {
              this.paises = [];
              this.hayError = true;
    });
 };  

 sugerencias( temrino: string){
      this.hayError = false;
 }


}
