import { Component, OnInit } from '@angular/core';
import { DogsService } from 'src/app/services/dogs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alldogs',
  templateUrl: './alldogs.component.html',
  styleUrls: ['./alldogs.component.css']
})
export class AlldogsComponent implements OnInit {

  constructor(private dog:DogsService , private router:Router) { }
  public dogs=[];
  ngOnInit() {
    this.dog.listalldog().subscribe(data=>{
      this.dogs=data;
      console.log(data);

    })
    
  }
  onSelect(dog){
    this.router.navigate(['/alldogdetails',dog._id])
    console.log(dog._id)
  }
  search(name){
    this.router.navigate(['/all_dog_search',name])
   console.log(name);
   
  }
  back(){
    this.router.navigate(['/dogs/alldogs'])
    }

}
