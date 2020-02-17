import { Component, OnInit } from '@angular/core';
import { BirdsService } from 'src/app/services/birds.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allbirds-admin',
  templateUrl: './allbirds-admin.component.html',
  styleUrls: ['./allbirds-admin.component.css']
})
export class AllbirdsAdminComponent implements OnInit {

 public birdcode: any;
  birds: any;


  constructor(private bird:BirdsService,private route:Router) { }

  ngOnInit() {
    this.bird.listheavy().subscribe(data=>{
      this.birds=data;
      console.log(data)
    })
  }

}
