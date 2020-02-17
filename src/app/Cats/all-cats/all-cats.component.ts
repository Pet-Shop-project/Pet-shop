import { Component, OnInit } from '@angular/core';
import {HeavtCatsService} from '../../services/heavt-cats.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-cats',
  templateUrl: './all-cats.component.html',
  styleUrls: ['./all-cats.component.css']
})
export class AllCatsComponent implements OnInit {

  constructor( private cat:HeavtCatsService , private router:Router) { }
  public cats=[];
  ngOnInit() {

    this.cat.listallcats().subscribe(data=>{
      this.cats=data;
      console.log(data);
  })
}
onSelect(cat){
  this.router.navigate(['/all-cat-details',cat._id])
  console.log(cat._id)
}


}
