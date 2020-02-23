import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  getCart():Observable<any>{
    return this.http.get<any>('http://localhost:3000/PET-SHOP/shopcart/show')
  }
  postCart(proId):Observable<any> {
    return this.http.get<any>('http://localhost:3000/PET-SHOP/shopcart/cart/'+proId)
  }
  postDeleteCart(proId):Observable<any> {
    return this.http.get<any>('http://localhost:3000/PET-SHOP/shopcart/deleteCart/'+proId)
  }
}
