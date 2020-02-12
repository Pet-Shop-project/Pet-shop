import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Smallpets } from '../smallpets'

@Injectable({
  providedIn: 'root'
})
export class SmallpetServiceService {
 public light_api='http://localhost:3000/PET-SHOP/light_pet/light/'
 public heavy_api='http://localhost:3000/heavy_pet/heavy'
 public normal_api='http://localhost:3000/normal_pet/normal'
 public lightdetails_api='http://localhost:3000/PET-SHOP/light_pet/details/'
  constructor(private http:HttpClient) { }

  getlightpet():Observable<any>{
    return this.http.get<any>(this.light_api)

  }
  getlightdetails(light_id):Observable<any>{
    return this.http.get<any>(this.lightdetails_api+light_id )
  }

  // getheavypet():Observable<Smallpets[]>{
  //   return this.http.get<Smallpets[]>(this.heavy_api)

  // }
  // getnormalpet():Observable<Smallpets[]>{
  //   return this.http.get<Smallpets[]>(this.normal_api)

  // }





}
