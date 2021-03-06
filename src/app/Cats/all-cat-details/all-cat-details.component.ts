import { Component, OnInit } from '@angular/core';
import {Cats} from '../../cats'
import {HeavtCatsService} from '../../services/heavt-cats.service'
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-all-cat-details',
  templateUrl: './all-cat-details.component.html',
  styleUrls: ['./all-cat-details.component.css']
})
export class AllCatDetailsComponent implements OnInit {

  constructor(private catServ:HeavtCatsService,
    private router:Router,private route:ActivatedRoute,private cartserv:CartService) { }
    public code;
    public ID;
  
    public cat=new Cats ("","",0,0,"",0,"",['']);

  ngOnInit() {

    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.code=params.get('_id');
      console.log(typeof(params.get("_id")))
     });


     this.catServ.all_details(this.code).subscribe(data=>{
      this.cat=data;
      
      console.log(this.cat);
    })
  }

  back()
  {
   this.router.navigate(['/listcats']);

  }
  public addToCart(prductId,productPrice,productName,productImg){
    console.log(prductId)
    this.cartserv.cartProducting(prductId,productPrice,productName,productImg).subscribe(
      response => console.log('Add to cart', response),
      error => console.log('error',error)
      )
  }
}
