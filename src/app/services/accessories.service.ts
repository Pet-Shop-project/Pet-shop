import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Accessories } from '../accessories'
@Injectable({
  providedIn: 'root'
})
export class AccessoriesService {
  
  constructor(private http:HttpClient) { }
  listaccessories():Observable<any>{
    return this.http.get("http://localhost:3000/PET-SHOP/accessories/list/")
  }
}
