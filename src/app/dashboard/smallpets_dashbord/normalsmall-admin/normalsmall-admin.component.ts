import { Component, OnInit } from '@angular/core';
import { SmallpetServiceService } from 'src/app/services/smallpet-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-normalsmall-admin',
  templateUrl: './normalsmall-admin.component.html',
  styleUrls: ['./normalsmall-admin.component.css']
})
export class NormalsmallAdminComponent implements OnInit {

  public normalsmallpet=[]
  constructor(private getnormalpet:SmallpetServiceService,private router:Router) { }

  ngOnInit() {
    this.getnormalpet.getnormalpet().subscribe(data =>
      this.normalsmallpet=data
     
    );
    console.log(this.normalsmallpet)
  }
  showdetails(normal){
    this.router.navigate(["/normaldetail",normal._id])
    }

}
