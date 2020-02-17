import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { BirdsService } from 'src/app/services/birds.service';
import { Birds } from 'src/app/birds';

@Component({
  selector: 'app-all-details',
  templateUrl: './all-details.component.html',
  styleUrls: ['./all-details.component.css']
})
export class AllDetailsComponent implements OnInit {
  birdcode: any;

  
  public allid;
public birds=new Birds("", 0,0,0,"",0,"",[""]);
  constructor(private getallbirds:BirdsService,private detailroute:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.detailroute.paramMap.subscribe((params:ParamMap)=>{
      this.allid=params.get("_id")
    })
     this.getallbirds.alldetails(this.allid).subscribe(data =>{
      this.birds=data;
     })
      // console.log(this.lightdetails)
  }
}


