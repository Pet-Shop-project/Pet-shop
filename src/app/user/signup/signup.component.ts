import { Component, OnInit } from '@angular/core';
// import { UserSignup } from 'src/app/user-signup'
import { Register } from 'src/app/services/register';
import { NgForm } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  Register : Register
  Result: string;
  Result1: number=1;
  Result2: number=1;
  Div: string;
  Div1: string;
  constructor(private RegServ : RegisterService , private router:Router , private Gen:GeneralService) { }
  // public Register = new Register("", "", "", "");
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
     this.RegServ.postData(this.Register).subscribe(res=>
      {
       console.log(res)
        this.resetForm(form);
        
          this.Gen.Registerd=true
        this.router.navigate(['/user/Login'])
        
      
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
    this.Register = 
    {
    name : "",
    email : "",
    password :"",
    password2: ""

    }
  }
}
