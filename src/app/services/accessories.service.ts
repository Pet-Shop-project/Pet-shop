import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,Subject  } from 'rxjs';
import { Accessories } from '../accessories'
@Injectable({
  providedIn: 'root'
})
export class AccessoriesService {
  
private myMessage = new Subject<any>();
private requestBody = JSON.stringify(status);
  constructor(private http:HttpClient) { }
  listaccessories():Observable<any>{
    return this.http.get("http://localhost:3000/PET-SHOP/accessories/list/")
  }
 updatepet(id):Observable<any>{
   return this.http.put(this.requestBody,"http://localhost:3000/PET-SHOP/accessories/update/"+id)
 }
  addnewaccessory(Accessories):Observable<any>{
    return this.http.post("http://localhost:3000/PET-SHOP/accessories/add",Accessories)
  }
}
