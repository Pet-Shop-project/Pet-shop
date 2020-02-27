import { Component, OnInit } from '@angular/core';
import { Registeradmin } from './registeradmin';
import { RegisteradminService } from './registeradmin.service';
import { Router } from '@angular/router';
import { GeneraladminService } from './generaladmin.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addnewadmin',
  templateUrl: './addnewadmin.component.html',
  styleUrls: ['./addnewadmin.component.css']
})
export class AddnewadminComponent implements OnInit {
  Registeradmin : Registeradmin
  Result: string;
  Result1: number=1;
  Result2: number=1;
  Div: string;
  Div1: string;
  constructor(private RegServ : RegisteradminService , private router:Router , private Gen:GeneraladminService) { }

  ngOnInit() {
    this.resetForm()
  }
  onSubmit (form :NgForm)
  {
    this.insert(form);
  }
  insert (form :NgForm)
  {
    if (form.invalid)
   { 
     this.Result1= 0; 
    this.Div1 = "Complete All Data"
   }
   else
   { 
     this.RegServ.postData(this.Registeradmin).subscribe(res=>
      {
       console.log(res)
        this.resetForm(form);
        
          this.Gen.Registerd=true
        this.router.navigate(['/dashboard'])
        
      
    }
    ,error => {
      console.log(error)
      this.Result1 = 0;
      this.Div = error.error.Msg as string;
      
    });
  }
   
  }
  resetForm( form? : NgForm)
  {
    if (form!=null)
    form.resetForm();
    this.Registeradmin = 
    {
    name : "",
    email : "",
    password :"",
    password2: ""

    }
  }

}
