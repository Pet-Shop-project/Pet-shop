import { Component, OnInit } from '@angular/core';
import {Cats} from '../../cats'
import {HeavtCatsService} from '../../services/heavt-cats.service'
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-heavy-cats-details',
  templateUrl: './heavy-cats-details.component.html',
  styleUrls: ['./heavy-cats-details.component.css']
})
export class HeavyCatsDetailsComponent implements OnInit {

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


     this.catServ.heavy_cats_details(this.code).subscribe(data=>{
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
