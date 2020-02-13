import { Component, OnInit } from '@angular/core';
import {Cats} from '../../cats'
import {HeavtCatsService} from '../../services/heavt-cats.service'
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-light-cats-details',
  templateUrl: './light-cats-details.component.html',
  styleUrls: ['./light-cats-details.component.css']
})
export class LightCatsDetailsComponent implements OnInit {

  constructor(private catServ:HeavtCatsService,
    private router:Router,private route:ActivatedRoute,) { }
    public code;
    public ID;
  
    public cat=new Cats ("","",0,0,"",0,"",['']);
  ngOnInit() {

    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.code=params.get('_id');
      console.log(typeof(params.get("_id")))
     });


     this.catServ.light_cats_details(this.code).subscribe(data=>{
      this.cat=data;
      this.ID=this.code.slice(0,9);
      console.log(this.cat);
    })
  }


  
  back()
  {
   this.router.navigate(['/listcats']);

  }
}
