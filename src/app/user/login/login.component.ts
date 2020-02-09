import { Component, OnInit } from '@angular/core';
import { LoginUser } from 'src/app/login-user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
 public userModel=new LoginUser("","");
  ngOnInit() {
  }
onSubmit(){
  console.log("login")
}
}
