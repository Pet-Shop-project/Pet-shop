import { Component, OnInit } from '@angular/core';
import { HeavtCatsService } from "src/app/services/heavt-cats.service";
import { Cats } from "src/app/cats";

@Component({
  selector: 'app-cat-admin-addform',
  templateUrl: './cat-admin-addform.component.html',
  styleUrls: ['./cat-admin-addform.component.css']
})
export class CatAdminAddformComponent implements OnInit {
// public sizes=["largest","small","medium"]
  constructor(private getnew:HeavtCatsService) { }
  catModel=new Cats("","",0,0,"",0,"",[""])
  ngOnInit() {
  }
 
  onSubmit(){
   
      this.getnew.addnewheavycat(this.catModel).subscribe(response =>{
        console.log('data saved',response)
     })
    }
    
     
  
}
