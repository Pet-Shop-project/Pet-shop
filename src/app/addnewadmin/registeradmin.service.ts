import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registeradmin } from './registeradmin';

@Injectable({
  providedIn: 'root'
})
export class RegisteradminService {

  constructor(private http:HttpClient) { }
  postData(Registeradmin:Registeradmin){
    return this.http.post('http://localhost:3000/PET-SHOP/admin/register',Registeradmin)
   }
}
