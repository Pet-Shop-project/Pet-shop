import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user :string
  constructor(private router : Router, private gen : GeneralService) { 
    gen.GetUser().subscribe(res=>
      this.user= res as string
 )
  }
  Logout()
  {
    localStorage.removeItem("token")
    this.router.navigate(['/user/login'])
     
  }

  ngOnInit() {
  }

}
