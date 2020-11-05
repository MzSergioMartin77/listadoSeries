import { Component, OnInit } from '@angular/core';
import { Serie } from '../models/serie';
import { SerieService } from '../services/serie.service';
import { Global } from '../services/global';
import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-list-series',
  templateUrl: './list-series.component.html',
  styleUrls: ['./list-series.component.scss'],
  providers: [SerieService]
})
export class ListSeriesComponent implements OnInit {

  public series: Serie[];
  public tipo: String = 'Todos';
  public genero: String = 'Todos';
  generos = new FormControl();
  generosList: string[] = ['Acción', 'Aventura', 'Ciencia Ficción', 'Comedia', 'Comedia negra',
     'Fantasía', 'Fantasía oscura', 'Drama', 'Mecha', 'Psicológico', 'Ecchi', 'Sobrenatural', 'Romance',
     'Suspense', 'Bélico', 'Superhéroes', 'Gánsteres', 'Animación','Escolares', 'Tragedia', 'RPG', 
     'Estrategia','Todos'];
  tipos = new FormControl();
  tiposList: string[] = ['Anime', 'Serie', 'Película', 'Manga', 'Videojuego', 'Todos'];
  constructor(private _serieService: SerieService) { 
  }

  ngOnInit(): void {
    this.getSeries();
  }

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
