import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HarrypotterService {

  urlPersonajes = 'http://hp-api.herokuapp.com/api/characters/house/slytherin';

  constructor(private http:HttpClient) { }

  getPersonajes():Observable<any>{
    return this.http.get(this.urlPersonajes);
  }
}
