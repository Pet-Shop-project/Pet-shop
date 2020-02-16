import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SmallpetServiceService } from 'src/app/services/smallpet-service.service';
import { Smallpets } from '../../smallpets';
import { from } from 'rxjs';


@Component({
  selector: 'app-lightpets-details',
  templateUrl: './lightpets-details.component.html',
  styleUrls: ['./lightpets-details.component.css']
})
export class LightpetsDetailsComponent implements OnInit {
  public lightid;
public pet=new Smallpets([""],"","",0,"","",0,"");
  constructor(private getLightpet:SmallpetServiceService,private detailroute:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.detailroute.paramMap.subscribe((params:ParamMap)=>{
      this.lightid=params.get("_id")
    })
     this.getLightpet.getlightdetails(this.lightid).subscribe(data =>{
      this.pet=data;
     })
      // console.log(this.lightdetails)
  }

}
