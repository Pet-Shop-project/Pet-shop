import { Component, OnInit } from '@angular/core';
import { BirdsService } from 'src/app/services/birds.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lightbirds-admin',
  templateUrl: './lightbirds-admin.component.html',
  styleUrls: ['./lightbirds-admin.component.css']
})
export class LightbirdsAdminComponent implements OnInit {
  birds: any;

  constructor(private bird:BirdsService,private route:Router) { }

  
  ngOnInit() {
    this.bird.listheavy().subscribe(data=>{
      this.birds=data;
      // console.log(data)
    })
  }
  showdetails(bird){
    this.route.navigate(["/lightbirds_admin",bird._id])
    }
}
  

