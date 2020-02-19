import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUser } from '../login-user'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  constructor(private http:HttpClient) { }
  GetData() {
    return this.http.get('http://localhost:3000/PET-SHOP/user/login')
   }
  postData(Login: LoginUser) {
    console.log(Login)
    return this.http.post('http://localhost:3000/PET-SHOP/user/login',Login)
   }
}
