import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Dogs } from '../dogs'
@Injectable({
  providedIn: 'root'
})
export class DogsService {
  constructor(private http:HttpClient) { }
  listlightd():Observable<any>{
  return this.http.get<any>("http://localhost:3000/PET-SHOP/lightdogs/list/")
  }
  listnormaldog():Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/normaldogs/list/")
  }
  listheavydog():Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/heavydogs/list/")
  }
  listalldog():Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/alldogs/list/")
  }
  lightdogdetails(_id){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/lightdogs/lightdogdetails/"+_id)
  }
  heavydetails(_id){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/heavydogs/details/"+_id)
  }
  normaldetails(_id){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/normaldogs/details/"+_id)
  }
  alldetails(_id){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/alldogs/details/"+_id)
  }
}
