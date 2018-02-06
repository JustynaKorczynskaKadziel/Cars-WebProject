import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response }  from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CarsService {
result: any;
private apiUrl = "http://localhost:3000/api/cars";
  constructor(private http: Http) { }

  getCars(){
    console.log("check service");
    return this.http.get(this.apiUrl).map(result => this.result.json().data);
    
    ///return this.http.get(this.apiUrl).map((res: Response) => res.json());
    
  }
  
}
