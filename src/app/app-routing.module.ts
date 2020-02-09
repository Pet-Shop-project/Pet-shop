import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlldogsComponent } from './dogs/alldogs/alldogs.component';
import { LightdogsComponent } from './dogs/lightdogs/lightdogs.component';
import { NormaldogsComponent } from './dogs/normaldogs/normaldogs.component';
import { HeavydogsComponent } from './dogs/heavydogs/heavydogs.component';
import { SliderComponent } from './slider/slider.component';
import { AlldogdetailsComponent } from './dogdetails/alldogdetails/alldogdetails.component';
import { LightdogdetailsComponent } from './dogdetails/lightdogdetails/lightdogdetails.component';
import { NormaldogdetailsComponent } from './dogdetails/normaldogdetails/normaldogdetails.component';
import { HeavydogdetailsComponent } from './dogdetails/heavydogdetails/heavydogdetails.component';


import { AllpetsComponent } from "src/app/small pets/allpets/allpets.component";
import { LightpetsComponent } from "src/app/small pets/lightpets/lightpets.component";
import { HeavypetsComponent } from "src/app/small pets/heavypets/heavypets.component";
import { NormalpetsComponent } from "src/app/small pets/normalpets/normalpets.component";
import {AllCatsComponent}  from './Cats/all-cats/all-cats.component'
import {LightCatsComponent} from './Cats/light-cats/light-cats.component'
import{NormalCatsComponent} from './Cats/normal-cats/normal-cats.component'
import {HeavyCatsComponent} from './Cats/heavy-cats/heavy-cats.component'
import {CatsDetailsComponent} from './Cats/cats-details/cats-details.component'
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
const routes: Routes = [
  {path:'',component:SliderComponent},
  {path:'dogs/alldogs',component:AlldogsComponent},
  {path:'dogs/lightdogs',component:LightdogsComponent},
  {path:'dogs/normaldogs',component:NormaldogsComponent},
  {path:'dogs/heavydogs',component:HeavydogsComponent},
  {path:'alldogdetails',component:AlldogdetailsComponent},
  {path:'lightdogdetails',component:LightdogdetailsComponent},
  {path:'normaldogdetails',component:NormaldogdetailsComponent},
  {path:'heavydogdetails',component:HeavydogdetailsComponent},
  {path:'smallpets/all',component:AllpetsComponent},
  {path:'smallpets/light',component:LightpetsComponent},
  {path:'smallpets/heavy',component:HeavypetsComponent},
  {path:'smallpets/normal',component:NormalpetsComponent},
  {path:'all-cats',component:AllCatsComponent},
  {path:'light-cats',component:LightCatsComponent},
  {path:'normal-cats',component:NormalCatsComponent},
  {path:'heavy-cats',component:HeavyCatsComponent},
  {path:'details-cats',component:CatsDetailsComponent},
  {path:'user',component:UserComponent
,children:[{path:'Login',component:LoginComponent},{path:'SignUp',component:SignupComponent}]}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
