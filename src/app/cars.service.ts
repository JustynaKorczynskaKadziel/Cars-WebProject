import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ICar } from './models/car';

@Injectable()
export class CarsService {
result: any;
private _apiUrl = "api/cars";
  constructor(private _http: Http) { }

  getCars(){
    console.log("check service");
    return this._http.get(this._apiUrl)
    .map((response: Response) => response.json());
  }
}
