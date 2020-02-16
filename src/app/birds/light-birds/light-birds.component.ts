import { Component, OnInit } from '@angular/core';
import { BirdsService } from 'src/app/services/birds.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-light-birds',
  templateUrl: './light-birds.component.html',
  styleUrls: ['./light-birds.component.css']
})
export class LightBirdsComponent implements OnInit {
 public birds:[];

  constructor(private bird:BirdsService,private route:Router) { }

  ngOnInit() {
    this.bird.listlightd().subscribe(data=>{
      this.birds=data;
      console.log(data)
    })
  }
  }


