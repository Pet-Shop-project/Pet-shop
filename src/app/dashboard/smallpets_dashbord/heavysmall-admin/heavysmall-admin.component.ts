import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SmallpetServiceService } from 'src/app/services/smallpet-service.service';

@Component({
  selector: 'app-heavysmall-admin',
  templateUrl: './heavysmall-admin.component.html',
  styleUrls: ['./heavysmall-admin.component.css']
})
export class HeavysmallAdminComponent implements OnInit {
  
  public heavysmallpet=[]
  constructor(private getheavypet:SmallpetServiceService,private router:Router) { }

  ngOnInit() {
    this.getheavypet.getheavypet().subscribe(data =>
      this.heavysmallpet=data
     
    );
    // console.log(this.lightsmallpet)
  }
  showdetails(heavy){
    this.router.navigate(["/heavydetail",heavy._id])
    }
}