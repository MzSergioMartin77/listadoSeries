import { Component, OnInit } from '@angular/core';
import { Serie } from '../models/serie';
import { SerieService } from '../services/serie.service';

@Component({
  selector: 'app-add-serie',
  templateUrl: './add-serie.component.html',
  styleUrls: ['./add-serie.component.scss'],
  providers: [SerieService]
})
export class AddSerieComponent implements OnInit {

    public title: String;
    public serie: Serie;

  constructor( private _serieService: SerieService ) {

      this.title = 'Añadir una obra';
      this.serie = new Serie('','','','','',0,'',0,'','','','',null);

     /* public id: String,
      public titulo: String,
      public descripcion: String,
      public estadoObra: String,
      public estadoUser: String,
      public temporadas: Number,
      public tipo: String,
      public tomos:Number,
      public autor:String,
      public director:String,
      public estudio:String,
      public plataforma:String,
      public genero: [String]*/
   }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.serie);
  }

}
