import { Component, OnInit } from '@angular/core';
import { AccessoriesService } from '../services/accessories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {

  constructor(private acc:AccessoriesService,private router:Router) { }
  public accessories=[];
  ngOnInit() {
    this.acc.listaccessories().subscribe(data=>{
      this.accessories=data;
    console.log(data);

    })
  }

}
