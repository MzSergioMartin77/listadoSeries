import { Component, OnInit } from '@angular/core';
import { Serie } from '../models/serie';
import { SerieService } from '../services/serie.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-serie',
  templateUrl: './add-serie.component.html',
  styleUrls: ['./add-serie.component.scss'],
  providers: [SerieService]
})
export class AddSerieComponent implements OnInit {

    public title: String;
    public serie: Serie;
    public status: String;
    public save_serie;
    generos = new FormControl();
    generosList: string[] = ['Acción', 'Aventura', 'Ciencia Ficción', 'Comedia', 'Comedia negra',
     'Fantasía', 'Fantasía oscura', 'Drama', 'Mecha', 'Psicológico', 'Sobrenatural', 'Romance',
     'Suspense', 'Misterio', 'Bélico', 'Superhéroes', 'Gánsteres', 'Animación','Escolares', 'Tragedia', 
     'RPG', 'Estrategia'];

  constructor( private _serieService: SerieService ) {

      this.title = 'Añadir una obra';
      this.serie = new Serie('','','','','',0,'',0,'','','','',null);

   }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.serie);
    this._serieService.saveSerie(this.serie).subscribe(
      response => {
        this.save_serie = response.serie;
        this.status = 'true';
        form.reset();
      },
      error => {
        this.status = 'false';
      }
      
    )
  }

}
