import { Component, OnInit } from '@angular/core';
import { BirdsService } from 'src/app/services/birds.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heavy-birds',
  templateUrl: './heavy-birds.component.html',
  styleUrls: ['./heavy-birds.component.css']
})
export class HeavyBirdsComponent implements OnInit {
public birds:[];
  constructor(private bird:BirdsService,private route:Router) { }

  
  ngOnInit() {
    this.bird.listheavy().subscribe(data=>{
      this.birds=data;
      console.log(data)
    })
  }

}
