import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Serie } from '../models/serie';
import { Global } from './global';

@Injectable({
  providedIn: 'root',
})
export class SerieService {

  public url: String;

  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }

  testService(){
    return "Probando servicio angular";
  }
}
