import { Component, OnInit } from '@angular/core';
import { BirdsService } from 'src/app/services/birds.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Birds } from 'src/app/birds';

@Component({
  selector: 'app-normal-details',
  templateUrl: './normal-details.component.html',
  styleUrls: ['./normal-details.component.css']
})
export class NormalDetailsComponent implements OnInit {
  
  

  public normalid;
public birds=new Birds("", 0,0,0,"",0,"",[""]);
  constructor(private getnormaldetails:BirdsService,private detailroute:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.detailroute.paramMap.subscribe((params:ParamMap)=>{
      this.normalid=params.get("_id")
    })
     this.getnormaldetails.normaldetails(this.normalid).subscribe(data =>{
      this.birds=data;
     })
      // console.log(this.lightdetails)
  }
  }
