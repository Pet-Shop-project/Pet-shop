import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BirdsService } from 'src/app/services/birds.service';

@Component({
  selector: 'app-all-birds',
  templateUrl: './all-birds.component.html',
  styleUrls: ['./all-birds.component.css']
})
export class AllBirdsComponent implements OnInit {

public birds=[];
  constructor(private bird:BirdsService,private route:Router) { }

  ngOnInit() {
    this.bird.listallbirds().subscribe(data=>{
      this.birds=data;
      console.log(data)
    })
  
  }
  showdetails(bird){
    this.route.navigate(["/all-details",bird._id])
    }
  }

  

  


