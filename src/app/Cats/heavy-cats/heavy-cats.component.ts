import { Component, OnInit } from '@angular/core';
import {HeavtCatsService} from '../../services/heavt-cats.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-heavy-cats',
  templateUrl: './heavy-cats.component.html',
  styleUrls: ['./heavy-cats.component.css']
})
export class HeavyCatsComponent implements OnInit {

  constructor(private catsServ:HeavtCatsService,private router:Router) { }
  public cats=[]; 

  ngOnInit() {
    this.catsServ.get_heavy_cats().subscribe(data=>{
      this.cats=data;
  })
}


  onSelect(cat){
    this.router.navigate(['/heavy-cats-details',cat._id])
   console.log(cat._id);
   
  }


}


