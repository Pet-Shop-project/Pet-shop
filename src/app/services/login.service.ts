import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LoginUser } from '../login-user'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  constructor(private http:HttpClient) { }
  GetData() {
    return this.http.get('http://localhost:3000/PET-SHOP/user/login',{
      observe :'body',   
      params : new HttpParams().append('token',localStorage.getItem('token'))});
    }
    GetUser(){
      return this.http.get('http://localhost:3000/PET-SHOP/user/Username',{
        observe :'body',   
        params : new HttpParams().append('token',localStorage.getItem('token'))});
    }
  
   
  postData(Login: LoginUser) {
    console.log(Login)
    return this.http.post('http://localhost:3000/PET-SHOP/user/login',Login,{
      observe :'body',   
      params : new HttpParams().append('token',localStorage.getItem('token'))});
   }
   public auth(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
  }
}
