import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DogsService } from 'src/app/services/dogs.service';
import { Dogs } from '../../services/dogs'
import { HttpBackend } from '@angular/common/http';


@Component({
  selector: 'app-lightdogdetails',
  templateUrl: './lightdogdetails.component.html',
  styleUrls: ['./lightdogdetails.component.css']
})
export class LightdogdetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute , private dog:DogsService , private router:Router) { }
  public dogcode;
  public dogs = new Dogs("","",0,0,"",0,"",[""]);
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.dogcode=params.get('_id');
      console.log(typeof(params.get("_id")))
     });
    this.dog.lightdogdetails(this.dogcode).subscribe(data=>{
      this.dogs=data;
    })
  }
  back(){
  this.router.navigate(['/dogs/lightdogs'])
  }
}

