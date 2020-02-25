import { Component, OnInit } from '@angular/core';
import{NavbarService} from '../services/navbar.service'
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public productsInCart=[]
  public cartInfo=[];
  isUserAuth: any;
  userName: String;
  constructor(public nav: NavbarService,private cartserv:CartService,private router:Router,private LogServ : LoginService) {
    if(this.LogServ.auth()){
      // console.log(this.LogServ.auth())
    this.LogServ.GetUser().subscribe(res=>{
        this.userName= res as string
    }  
  )
  this.cartserv.cartProductsDetails().subscribe(data=>{
    if(data!=null){
      this.cartInfo=data;
      // console.log(data)
    } else{
      this.productsInCart=["Cart still Empty"]
    }
  });
}
   }
  
  ngOnInit() {
  }

}
