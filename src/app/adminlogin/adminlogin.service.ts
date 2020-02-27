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
      params : new HttpParams().append('Admintoken',localStorage.getItem('Admintoken'))});
   }
   GetAdmin(){
    return this.http.get('http://localhost:3000/PET-SHOP/admin/Username',{
      observe :'body',   
      params : new HttpParams().append('Admintoken',localStorage.getItem('Admintoken'))});
  }

  public auth(){
    return !!localStorage.getItem('Admintoken')
  }
  getToken(){
    return localStorage.getItem('Admintoken')
  }
}
