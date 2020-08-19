import { Pipe, PipeTransform } from '@angular/core';
import { Serie } from './models/serie';

@Pipe({
  name: 'tipoSerie'
})
export class TipoSeriePipe implements PipeTransform {

  transform(series: Serie[], tipo:String){
    return series.filter(serie => {
      if(serie.tipo === tipo){
        return serie;
      }
    })
  }

}
