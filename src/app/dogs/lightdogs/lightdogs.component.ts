import { Component, OnInit } from '@angular/core';
import { DogsService } from 'src/app/services/dogs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lightdogs',
  templateUrl: './lightdogs.component.html',
  styleUrls: ['./lightdogs.component.css']
})
export class LightdogsComponent implements OnInit {

  constructor(private dog:DogsService , private router:Router) { }
public dogs=[];
  ngOnInit() {
    this.dog.listlightd().subscribe(data=>{
    this.dogs=data;
    console.log(data);
    })
  }
  onSelect(dog){
    this.router.navigate(['/lightdogdetails',dog._id])
    console.log(dog._id)
  }
}
