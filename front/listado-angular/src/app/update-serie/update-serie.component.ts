import { Component, OnInit } from '@angular/core';
import { Serie } from '../models/serie';
import { SerieService } from '../services/serie.service';
import {FormControl} from '@angular/forms';
import { Global } from '../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update-serie',
  templateUrl: '../add-serie/add-serie.component.html',
  styleUrls: ['./update-serie.component.scss'],
  providers: [SerieService]
})
export class UpdateSerieComponent implements OnInit {

  public title: String;
    public serie: Serie;
    public status: String;
    public save_serie;
    generos = new FormControl();
    generosList: string[] = ['Acción', 'Aventura', 'Ciencia Ficción', 'Comedia', 'Comedia negra',
     'Fantasía', 'Fantasía oscura', 'Drama', 'Mecha', 'Psicológico', 'Ecchi', 'Sobrenatural', 'Romance',
     'Suspense', 'Misterio', 'Bélico', 'Superhéroes', 'Gánsteres', 'Escolares', 'Tragedia', 'RPG'];

  constructor( 
      private _serieService: SerieService,
      private _router: Router,
      private _route: ActivatedRoute
    ) {

      this.title = 'Actualizar una obra';

   }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params.id;
      this.getSerie(id);
    })
  }

  getSerie(id){
    this._serieService.getSerie(id).subscribe(
      response => {
        this.serie = response.serie;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  onSubmit(form){
    console.log(this.serie);
    this._serieService.updateSerie(this.serie).subscribe(
      response => {
        this.save_serie = response.serie;
        this.status = 'true';
      },
      error => {
        this.status = 'false';
      }
      
    )
  }

}
