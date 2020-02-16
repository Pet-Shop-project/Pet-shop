import { Component, OnInit } from '@angular/core';
import { BirdsService } from 'src/app/services/birds.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-normal-birds',
  templateUrl: './normal-birds.component.html',
  styleUrls: ['./normal-birds.component.css']
})
export class NormalBirdsComponent implements OnInit {
 public birds: [];

  constructor(private bird:BirdsService,private route:Router) { }

  ngOnInit() {
    this.bird.listnormalbird().subscribe(data=>{
      this.birds=data;
      console.log(data)
    })
  
  }

}
