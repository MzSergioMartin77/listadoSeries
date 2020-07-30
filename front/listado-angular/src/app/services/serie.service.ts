import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serie } from '../models/serie';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  public url:String;

  constructor(private _http:HttpClient) {
    this.url = global.url;
  }

  testService(){
    return "Probando servicio angular";
  }
}
