import { Component, OnInit } from '@angular/core';
import { DogsService } from 'src/app/services/dogs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heavydogs',
  templateUrl: './heavydogs.component.html',
  styleUrls: ['./heavydogs.component.css']
})
export class HeavydogsComponent implements OnInit {
  constructor(private dog:DogsService , private router:Router) { }
  public dogs=[];
  ngOnInit() {
    this.dog.listheavydog().subscribe(data=>{
      this.dogs=data;
      console.log(data);

    })
  }
  onSelect(dog){
    this.router.navigate(['/heavydogdetails',dog._id])
    console.log(dog._id)
  }
}
