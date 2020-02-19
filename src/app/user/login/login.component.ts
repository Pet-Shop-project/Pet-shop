import { Component, OnInit } from '@angular/core';
import { LoginUser } from 'src/app/login-user';
import { Register } from 'src/app/services/register';
import { RegisterService } from 'src/app/services/register.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Login : LoginUser
  Result: boolean=false;
  Result2: boolean=false;
  Div: string;
  Div2: string;
  constructor(private LogServ : LoginService , private router:Router , private Gen:GeneralService) { }
//  public userModel=new LoginUser("","");
  ngOnInit() {
    this.resetForm()
    if (this.Gen.Registerd)
    {
      // console.log("asd")
      this.Result2 = true
    this.Div2= "Registerd Successfully, Login to Continue"
    }
    if (this.Gen.authorized)
    {
      console.log(this.Gen.authorized)
      // console.log("asd")
      this.Result2 = false;
      this.Result = true
    this.Div= "Please Login To view this Page"
    }
    
  }
  onSubmit (form :NgForm)
  {
    this.insert(form);
  }
  // GoToRegister()
  // {
  //   this.router.navigate(['/Register'])
  // }

  insert (form :NgForm)
  {
    if (form.invalid)
   { 
     this.Result= true; 
    this.Div = "Complete All Data"
   }
   else
   { 
    this.LogServ.postData(this.Login).subscribe(
      res=>
      {
        this.Result2 = false;
        this.Result = true;
         console.log(res)
        this.resetForm(form);
        localStorage.setItem('token',res as string)
        this.router.navigate(['/'])
        
    },
    error=>
    {
      this.Result= true; 
  
      this.Div=error.error.Msg
      console.log("erro")
    }
    );
  }
  }
  resetForm( form? : NgForm)
  {
    if (form!=null)
    form.resetForm();
    this.Login = 
    {
    email : "",
    password :"",
   
    }
 
  }
  
}
