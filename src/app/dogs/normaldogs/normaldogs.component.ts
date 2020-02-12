import { Component, OnInit } from '@angular/core';
import { DogsService } from 'src/app/services/dogs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-normaldogs',
  templateUrl: './normaldogs.component.html',
  styleUrls: ['./normaldogs.component.css']
})
export class NormaldogsComponent implements OnInit {

  constructor(private dog:DogsService , private router:Router) { }
  public dogs=[]; 
  ngOnInit() {
    this.dog.listnormaldog().subscribe(data=>{
      this.dogs=data;
      console.log(data);
    })
  }
  onSelect(dog){
    this.router.navigate(['/normaldogdetails',dog._id])
    console.log(dog._id)
  }

}
