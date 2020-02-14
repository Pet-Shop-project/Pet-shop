import { Component, OnInit } from '@angular/core';
import { SmallpetServiceService } from "src/app/services/smallpet-service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-lightpets',
  templateUrl: './lightpets.component.html',
  styleUrls: ['./lightpets.component.css']
})
export class LightpetsComponent implements OnInit {
public smallpet=[]
  constructor(private getLightpet:SmallpetServiceService,private router:Router) { }

  ngOnInit() {
    this.getLightpet.getlightpet().subscribe(data =>
      this.smallpet=data
     
    );
    console.log(this.smallpet)
  }
  showdetails(light){
    this.router.navigate(["/lightdetail",light._id])
    }
}
