import { Injectable, Type } from '@angular/core';
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

  saveSerie(serie : Serie) :Observable<any>{

    let params = JSON.stringify(serie, (key, value) => {
      if(value == '' && value == 0){
        return undefined;
      }
      return value;
    });
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.url+'add-obra', params, {headers:headers});
  }

  getSeries() :Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    
    return this._http.get(this.url+'obras', {headers:headers});
  }
}
