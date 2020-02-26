import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Cats} from '../cats'

@Injectable({
  providedIn: 'root'
})
export class HeavtCatsService {
  [x: string]: any;

  constructor(private http:HttpClient) { }
  private requestBody = JSON.stringify(status);
  get_heavy_cats():Observable<any>{
    
    
    return this.http.get<any>("http://localhost:3000/PET-SHOP/heavy_cats/listcat/");
 
  }

  //light
  get_light_cats():Observable<any>{
    
    
    return this.http.get<any>("http://localhost:3000/PET-SHOP/light_cats/listcat/");
 
  }

  get_normal_cats():Observable<any>{
    
    
    return this.http.get<any>("http://localhost:3000/PET-SHOP/normal_cats/listcat/");
 
  }


  get_normal_details(_id):Observable<any>{
    return this.http.get<any>('http://localhost:3000/PET-SHOP/normal_cats/details/'+_id);
  }



  heavy_cats_details(_id):Observable<any>{
    return this.http.get<any>('http://localhost:3000/PET-SHOP/heavy_cats/details/'+_id);
  }

  

  light_cats_details(_id):Observable<any>{
    return this.http.get<any>('http://localhost:3000/PET-SHOP/light_cats/details/'+_id);
  }

  listallcats():Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/allcats/list/")
  }
  all_details(_id){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/allcats/details/"+_id)
  }
  updatelightpet(id):Observable<any>{
    return this.http.put(this.requestBody,"http://localhost:3000/PET-SHOP/light_cats/update/"+id)
  }
  updatenormalpet(id):Observable<any>{
    return this.http.put(this.requestBody,"http://localhost:3000/PET-SHOP/normal_cats/update/"+id)
  }
  updateheavypet(id):Observable<any>{
    return this.http.put(this.requestBody,"http://localhost:3000/PET-SHOP/heavy_cats/update/"+id)
  }
}


