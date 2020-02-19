import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heavy-birds',
  templateUrl: './heavy-birds.component.html',
  styleUrls: ['./heavy-birds.component.css']
})
export class HeavyBirdsComponent implements OnInit {

  collection = { count: 12, data: [] };
  config = {
    id: 'custom',
    itemsPerPage: 3,
    currentPage: 1,
    totalItems: this.collection.count
  };
 
  
  
  constructor() {
    
  }
   

  ngOnInit() {
  }

}
