import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { GeneralService } from './general.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {

  constructor(private gen:GeneralService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean>|Promise<boolean>|boolean {  
    if (localStorage.getItem('token') !==  null)
     return true 
     else
     {
           console.log("asd")
           this.gen.authorized = true;
           console.log(this.gen.authorized)
           this.router.navigate(['../user/Login'])
           return false;
     }

   
}  
}
