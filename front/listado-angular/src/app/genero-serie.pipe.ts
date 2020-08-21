import { Pipe, PipeTransform } from '@angular/core';
import { Serie } from './models/serie';

@Pipe({
  name: 'generoSerie'
})
export class GeneroSeriePipe implements PipeTransform {

  transform(series: Serie[], genero: String) {
    return series.filter(serie => {
      for(var i=0; i<serie.genero.length; i++){
        if(serie.genero[i] == genero){
          return serie;
        }
      }
    })
  }

}
