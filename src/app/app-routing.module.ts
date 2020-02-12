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
import { AllpetsDetailsComponent } from "src/app/smallpets details/allpets-details/allpets-details.component";
import { LightpetsDetailsComponent } from "src/app/smallpets details/lightpets-details/lightpets-details.component";
import { HeavypetsDetailsComponent } from "src/app/smallpets details/heavypets-details/heavypets-details.component";
import { NormalpetsDetailsComponent } from "src/app/smallpets details/normalpets-details/normalpets-details.component";
import { AccessoriesComponent } from "src/app/accessories/accessories.component";
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { AllBirdsComponent } from './birds/all-birds/all-birds.component';
import { HeavyBirdsComponent } from './birds/heavy-birds/heavy-birds.component';
import { LightBirdsComponent } from './birds/light-birds/light-birds.component';
import { NormalBirdsComponent } from './birds/normal-birds/normal-birds.component';
import { NormalDetailsComponent } from './birds-details/normal-details/normal-details.component';
import { LightlDetailsComponent } from './birds-details/lightl-details/lightl-details.component';
import { AllDetailsComponent } from './birds-details/all-details/all-details.component';
import { HeavyDetailsComponent } from './birds-details/heavy-details/heavy-details.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import {HeavyCatsDetailsComponent} from './Cats/heavy-cats-details/heavy-cats-details.component'
import {LightCatsDetailsComponent} from './Cats/light-cats-details/light-cats-details.component'
import {NormalCatsDetailsComponent} from './Cats/normal-cats-details/normal-cats-details.component'
const routes: Routes = [
  {path:'',component:SliderComponent},
  {path:'accessories',component:AccessoriesComponent},
  {path:'dogs/alldogs',component:AlldogsComponent},
  {path:'dogs/lightdogs',component:LightdogsComponent},
  {path:'dogs/normaldogs',component:NormaldogsComponent},
  {path:'dogs/heavydogs',component:HeavydogsComponent},
  {path:'alldogdetails/:_id',component:AlldogdetailsComponent},
  {path:'lightdogdetails/:_id',component:LightdogdetailsComponent},
  {path:'normaldogdetails/:_id',component:NormaldogdetailsComponent},
  {path:'heavydogdetails/:_id',component:HeavydogdetailsComponent},
  {path:'smallpets/all',component:AllpetsComponent},
  {path:'smallpets/light',component:LightpetsComponent},
  {path:'smallpets/heavy',component:HeavypetsComponent},
  {path:'smallpets/normal',component:NormalpetsComponent},
  
  {path:'all-cats',component:AllCatsComponent},
  {path:'light-cats',component:LightCatsComponent},
  {path:'normal-cats',component:NormalCatsComponent},
  {path:'heavy-cats',component:HeavyCatsComponent},
  {path:'details-cats',component:CatsDetailsComponent},
  {path:'alldetail',component:AllpetsDetailsComponent},
  {path:'lightdetail',component:LightpetsDetailsComponent},
  {path:'heavydetail',component:HeavypetsDetailsComponent},
  {path:'normaldetail',component:NormalpetsDetailsComponent},
  {path:'user',component:UserComponent
,children:[{path:'Login',component:LoginComponent},{path:'SignUp',component:SignupComponent}]},
{path:'all-birds',component:AllBirdsComponent},
{path:'heavy-birds',component:HeavyBirdsComponent},
{path:'light-birds',component:LightBirdsComponent},
{path:'normal-birds',component:NormalBirdsComponent},
{path:'normal-details',component:NormalDetailsComponent},
{path:'light-details',component:LightlDetailsComponent},
{path:'all-details',component:AllDetailsComponent},
{path:'heavy-details',component:HeavyDetailsComponent},
{path:'heavy-cats-details',component:HeavyCatsDetailsComponent},
{path:'light-cats-details',component:LightCatsDetailsComponent},
{path:'normal-cats-details',component:NormalCatsDetailsComponent}
// {path:'404',component:PageNotfoundComponent},
// { path: '', component:PageNotfoundComponent},
    
//     { path: '**', redirectTo: '404' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
