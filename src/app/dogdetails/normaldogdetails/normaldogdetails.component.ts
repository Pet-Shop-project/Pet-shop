import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DogsService } from 'src/app/services/dogs.service';
import { Dogs } from 'src/app/services/dogs';

@Component({
  selector: 'app-normaldogdetails',
  templateUrl: './normaldogdetails.component.html',
  styleUrls: ['./normaldogdetails.component.css']
})
export class NormaldogdetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute , private dog:DogsService , private router:Router) { }
  public dogcode;
  public dogs = new Dogs("","",0,0,"",0,"",[""]);
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.dogcode=params.get('_id');
      console.log(typeof(params.get("_id")))
    });
    this.dog.normaldetails(this.dogcode).subscribe(data=>{
      this.dogs=data;
    })
  }
  back(){
    this.router.navigate(['/dogs/normaldogs'])
    }
}
