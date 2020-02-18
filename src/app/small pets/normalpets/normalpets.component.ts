import { Component, OnInit } from '@angular/core';
import { SmallpetServiceService } from 'src/app/services/smallpet-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-normalpets',
  templateUrl: './normalpets.component.html',
  styleUrls: ['./normalpets.component.css']
})
export class NormalpetsComponent implements OnInit {

  public smallpet=[]
  constructor(private getnormalpet:SmallpetServiceService,private router:Router) { }

  ngOnInit() {
    this.getnormalpet.getnormalpet().subscribe(data =>
      this.smallpet=data
     
    );
    console.log(this.smallpet)
  }
  showdetails(normal){
    this.router.navigate(["/normaldetail",normal._id])
    }

}
