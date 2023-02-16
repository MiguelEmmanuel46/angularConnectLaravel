import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contacto';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
    public url:string;

  constructor(public _http: HttpClient) { this.url = global.url;}


  register(contacto:any): Observable<any>{
    let json = JSON.stringify(contacto);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.post(this.url+'contacto-formulario', params, {headers:headers});
  }



}
