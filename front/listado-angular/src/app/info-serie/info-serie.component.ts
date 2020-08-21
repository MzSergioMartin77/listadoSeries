import { Component, OnInit } from '@angular/core';
import { Serie } from '../models/serie';
import { SerieService } from '../services/serie.service';
import { Global } from '../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-info-serie',
  templateUrl: './info-serie.component.html',
  styleUrls: ['./info-serie.component.scss'],
  providers: [SerieService]
})
export class InfoSerieComponent implements OnInit {

  public url: string;
  public serie: Serie;
  public id;

  constructor(
    private _serieService: SerieService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = Global.url;
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

  deleteSerie(id){
    this._serieService.deleteSerie(id).subscribe(
      response => {
        if(response.serie){
          this._router.navigate([""]);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
