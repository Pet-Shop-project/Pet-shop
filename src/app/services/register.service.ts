import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from './register';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  postData(Register:Register){
    return this.http.post('http://localhost:3000/PET-SHOP/user/register',Register)
   }
}
