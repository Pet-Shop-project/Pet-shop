import { Component, OnInit } from '@angular/core';
import { UserSignup } from 'src/app/user-signup'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  public userModel = new UserSignup("", "", "", "");
  ngOnInit() {
  }
 onSubmit() {
    console.log(this.userModel);
  }
}
