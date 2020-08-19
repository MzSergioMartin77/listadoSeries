import { Component, OnInit } from '@angular/core';
import { Serie } from '../models/serie';
import { SerieService } from '../services/serie.service';
import { Global } from '../services/global';

@Component({
  selector: 'app-list-series',
  templateUrl: './list-series.component.html',
  styleUrls: ['./list-series.component.scss'],
  providers: [SerieService]
})
export class ListSeriesComponent implements OnInit {

  public series: Serie[];
  public tipo: String;
  constructor(private _serieService: SerieService) { 
  }

  ngOnInit(): void {
    this.getSeries();
    console.log(this.tipo);
  }
  /* transform(series: Serie[]) {
        return series.filter(serie => function(tipo) {
            if(serie.tipo == tipo){
                series.push(serie);
            }
        });
    }*/ 

  getSeries(){
    this._serieService.getSeries().subscribe(
      response => {
        console.log(response);
        if (response.serie){
          this.series = response.serie;
        }
      },
      error => {
        console.log(<any>error);
      }
      
    )
  }

}
