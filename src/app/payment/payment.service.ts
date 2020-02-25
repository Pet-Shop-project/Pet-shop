import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Payment} from './payment'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }
   payment(pay){
    return this.http.post("http://localhost:3000/PET-SHOP/payment/pay",pay)
  } 
}
