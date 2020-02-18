import { Component, OnInit } from '@angular/core';
import { SmallpetServiceService } from "src/app/services/smallpet-service.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-allpets',
  templateUrl: './allpets.component.html',
  styleUrls: ['./allpets.component.css']
})
export class AllpetsComponent implements OnInit {
  public smallpet=[]
  constructor(private getallpet:SmallpetServiceService,private router:Router) { }

  ngOnInit() {
    this.getallpet.getallpet().subscribe(data =>
      this.smallpet=data
     
    );
    // console.log(this.lightsmallpet)
  }
  showdetails(all){
    this.router.navigate(["/alldetail",all._id])
    }

}
