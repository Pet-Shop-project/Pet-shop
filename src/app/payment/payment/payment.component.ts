import { Component, OnInit } from '@angular/core';
import { Payment } from '../payment'
import { from } from 'rxjs';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
    public cardModel=new Payment('','');
    constructor(private pay:PaymentService) { }
    

  ngOnInit() {
  }
  onSubmit() {
    this.pay.payment(this.cardModel).subscribe(
      data => console.log('Payment done', data),
      error => console.log('Error',error)
      )
  
    }

}
