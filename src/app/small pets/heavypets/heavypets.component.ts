import { Component, OnInit } from '@angular/core';
import { SmallpetServiceService } from 'src/app/services/smallpet-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heavypets',
  templateUrl: './heavypets.component.html',
  styleUrls: ['./heavypets.component.css']
})
export class HeavypetsComponent implements OnInit {
  public smallpet=[]
  constructor(private getheavypet:SmallpetServiceService,private router:Router) { }

  ngOnInit() {
    this.getheavypet.getheavypet().subscribe(data =>
      this.smallpet=data
     
    );
    // console.log(this.lightsmallpet)
  }
  showdetails(heavy){
    this.router.navigate(["/heavydetail",heavy._id])
    }
}
