import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Birds } from '../birds'
@Injectable({
  providedIn: 'root'
})
export class DogsService {
  constructor(private http:HttpClient) { }
  listlightd():Observable<any>{
  return this.http.get<any>("http://localhost:3000/PET-SHOP/lightbirds/list/")
  }
  listnormaldog():Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/normalbirds/list/")
  }
  listheavydog():Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/heavybirds/list/")
  }
  listalldog():Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/allbirds/list/")
  }
  lightdogdetails(_id){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/lightbirds/lightbirdsdetails/"+_id)
  }
  heavydetails(_id){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/heavybirds/details/"+_id)
  }
  normaldetails(_id){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/normalbirds/details/"+_id)
  }
  alldetails(_id){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/alldogs/details/"+_id)
  }
}
