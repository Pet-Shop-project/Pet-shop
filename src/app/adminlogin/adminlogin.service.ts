import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Adminlogin } from './adminlogin'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  constructor(private http:HttpClient) { }

  postData(Login: Adminlogin) {
    console.log(Login)
    return this.http.post('http://localhost:3000/PET-SHOP/admin/login',Login,{
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
