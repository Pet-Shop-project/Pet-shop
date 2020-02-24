import { Component, OnInit } from '@angular/core';
import { AccessoriesService } from "src/app/services/accessories.service";
import { Accessories } from 'src/app/accessories';

@Component({
  selector: 'app-accessories-admin-addform',
  templateUrl: './accessories-admin-addform.component.html',
  styleUrls: ['./accessories-admin-addform.component.css']
})
export class AccessoriesAdminAddformComponent implements OnInit {

  constructor(private getnew:AccessoriesService) { }
 
  accessModel=new Accessories("","",0 , 0,"",0 ,"",[""])
  ngOnInit() {
   
  }
  onSubmit(){
    this.getnew.addnewaccessory(this.accessModel).subscribe(response =>{
     console.log('data saved',response)
  })
  }
  
  

}
