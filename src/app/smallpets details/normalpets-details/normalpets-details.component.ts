import { Component, OnInit } from '@angular/core';
import { Smallpets } from 'src/app/smallpets';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { SmallpetServiceService } from 'src/app/services/smallpet-service.service';

@Component({
  selector: 'app-normalpets-details',
  templateUrl: './normalpets-details.component.html',
  styleUrls: ['./normalpets-details.component.css']
})
export class NormalpetsDetailsComponent implements OnInit {

  public normalid;
  public pet=new Smallpets([""],"","",0,"","",0,"");
    constructor(private getnormalpet:SmallpetServiceService,private detailroute:ActivatedRoute, private router:Router) { }
  
    ngOnInit() {
      this.detailroute.paramMap.subscribe((params:ParamMap)=>{
        this.normalid=params.get("_id")
      })
       this.getnormalpet.getnormaldetails(this.normalid).subscribe(data =>{
        this.pet=data;
       })
        // console.log(this.lightdetails)
    }
  

}
