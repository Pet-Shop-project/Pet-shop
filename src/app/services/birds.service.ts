import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Birds } from '../birds'
@Injectable({
  providedIn: 'root'
})
export class BirdsService {
  // getheavydetails(heavyid: any) {
  //   throw new Error("Method not implemented.");
  // }
  constructor(private http:HttpClient) { }
  listlightd():Observable<any>{
  return this.http.get<any>("http://localhost:3000/PET-SHOP/lightbirds/list/")
  }
  listnormalbird():Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/normalbirds/list/")
  }

listheavy():Observable<any>{
  return this.http.get<any>("http://localhost:3000/PET-SHOP/heavybirds/list/")
}
  listallbirds():Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/allbirds/list/") 
  }
  lightbirddetails(_id){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/lightbirds/lightbirdsdetails/"+_id)
  }
  heavydetails(_id){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/heavybirds/details/"+_id)
  }
  normaldetails(_id){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/normalbirds/details/"+_id)
  }
  alldetails(_id){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/allbirds/details/"+_id)
  }
  sort_light_birds(){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/sort/listbirds_light")
  }
  sort_hevy_birds(){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/sort/listbirds_hvy")
  }
  sort_norm_birds(){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/sort/listbirds_norm")
  }
}
