import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // cart=[];
  public productsInCart=[]
  public cartInfo=[];
  public product_id;
  public product={}
  public noProducts;
  constructor(private cartserv:CartService,private router:Router,private LogServ : LoginService) {
    if(this.LogServ.auth()){
      console.log(this.LogServ.auth())
      this.cartserv.cartProductsDetails().subscribe(data=>{
        if(data!=null){
          this.productsInCart=data.products;
          this.cartInfo=data;
          console.log(data)
        } else{
          this.noProducts="Cart still Empty"
          
        }
      }
      
      );
    }
   }

  ngOnInit() {
    // this.cartserv.getCart().subscribe(data =>{
    //   this.cart=data;
    //   console.log(typeof(data));
    //   console.log(data)

    // })
  }
  // deleteCartItem(itemId){
  //   this.router.navigate(['/cart',itemId]);
  //   this.cartserv.postDeleteCart(itemId).subscribe(()=>{
  //     console.log('deleted');
      
  //   })
  // }
  clearAllOfTheCart(){
    this.cartserv.clearCart().subscribe(data=>console.log("you've cleared your cart"))
  }

}
