import { Component, OnInit } from '@angular/core';
import { SmallpetServiceService } from 'src/app/services/smallpet-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lightsmall-admin',
  templateUrl: './lightsmall-admin.component.html',
  styleUrls: ['./lightsmall-admin.component.css']
})
export class LightsmallAdminComponent implements OnInit {
  lightsmallpet: any;

  constructor(private getLightpet:SmallpetServiceService,private router:Router) { }

  ngOnInit() {
    this.getLightpet.getlightpet().subscribe(data =>
      this.lightsmallpet=data
     
    );
    console.log(this.lightsmallpet)
  }
  showdetails(light){
    this.router.navigate(["/lightdetail",light._id])
    }
}