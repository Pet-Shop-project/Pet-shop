import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { BirdsService } from 'src/app/services/birds.service';
import { Birds } from 'src/app/birds';

@Component({
  selector: 'app-lightl-details',
  templateUrl: './lightl-details.component.html',
  styleUrls: ['./lightl-details.component.css']
})
export class LightlDetailsComponent implements OnInit {
  [x: string]: any;
  
  


  public lightid;
public birds=new Birds("", "",0,0,"",0,"",[""]);
  constructor(private getlightbirds:BirdsService,private detailroute:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.detailroute.paramMap.subscribe((params:ParamMap)=>{
      this.lightid=params.get("_id")
    })
     this.getlightbirds.lightbirddetails(this.lightid).subscribe(data =>{
      this.birds=data;
     })
      // console.log(this.lightdetails)
  }
  }

