import { Component, OnInit } from '@angular/core';
import { BirdsService } from 'src/app/services/birds.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Birds } from 'src/app/birds';

@Component({
  selector: 'app-heavy-details',
  templateUrl: './heavy-details.component.html',
  styleUrls: ['./heavy-details.component.css']
})
export class HeavyDetailsComponent implements OnInit {
  // [x: string]: any;

  public heavyid;
public birds=new Birds("", 0,0,0,"",0,"",[""]);
  constructor(private getheavybirds:BirdsService,private detailroute:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.detailroute.paramMap.subscribe((params:ParamMap)=>{
      this.heavyid=params.get("_id")
    })
     this.getheavybirds.heavydetails(this.heavyid).subscribe(data =>{
      this.birds=data;
     })
      // console.log(this.lightdetails)
  }
  }


