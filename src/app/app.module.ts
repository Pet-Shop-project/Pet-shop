import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { AlldogsComponent } from './dogs/alldogs/alldogs.component';
import { LightdogsComponent } from './dogs/lightdogs/lightdogs.component';
import { NormaldogsComponent } from './dogs/normaldogs/normaldogs.component';
import { HeavydogsComponent } from './dogs/heavydogs/heavydogs.component';
import { AlldogdetailsComponent } from './dogdetails/alldogdetails/alldogdetails.component';
import { LightdogdetailsComponent } from './dogdetails/lightdogdetails/lightdogdetails.component';
import { NormaldogdetailsComponent } from './dogdetails/normaldogdetails/normaldogdetails.component';
import { HeavydogdetailsComponent } from './dogdetails/heavydogdetails/heavydogdetails.component';
import { AllpetsComponent } from './small pets/allpets/allpets.component';
import { LightpetsComponent } from './small pets/lightpets/lightpets.component';
import { HeavypetsComponent } from './small pets/heavypets/heavypets.component';
import { NormalpetsComponent } from './small pets/normalpets/normalpets.component';
import { HomeComponent } from './home/home.component';
import { AllCatsComponent } from './Cats/all-cats/all-cats.component';
import { LightCatsComponent } from './Cats/light-cats/light-cats.component';
import { NormalCatsComponent } from './Cats/normal-cats/normal-cats.component';
import { HeavyCatsComponent } from './Cats/heavy-cats/heavy-cats.component';
import { CatsDetailsComponent } from './Cats/cats-details/cats-details.component';
import { AllpetsDetailsComponent } from './smallpets details/allpets-details/allpets-details.component';
import { LightpetsDetailsComponent } from './smallpets details/lightpets-details/lightpets-details.component';
import { HeavypetsDetailsComponent } from './smallpets details/heavypets-details/heavypets-details.component';
import { NormalpetsDetailsComponent } from './smallpets details/normalpets-details/normalpets-details.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { AllBirdsComponent } from './birds/all-birds/all-birds.component';
import { LightBirdsComponent } from './birds/light-birds/light-birds.component';
import { HeavyBirdsComponent } from './birds/heavy-birds/heavy-birds.component';
import { NormalBirdsComponent } from './birds/normal-birds/normal-birds.component';
import { AllDetailsComponent } from './birds-details/all-details/all-details.component';
import { LightlDetailsComponent } from './birds-details/lightl-details/lightl-details.component';
import { HeavyDetailsComponent } from './birds-details/heavy-details/heavy-details.component';
import { NormalDetailsComponent } from './birds-details/normal-details/normal-details.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { HeavyCatsDetailsComponent } from './Cats/heavy-cats-details/heavy-cats-details.component';
import { LightCatsDetailsComponent } from './Cats/light-cats-details/light-cats-details.component';
import { NormalCatsDetailsComponent } from './Cats/normal-cats-details/normal-cats-details.component';
import { BirdsService } from './birds.service';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';

// import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    AlldogsComponent,
    LightdogsComponent,
    NormaldogsComponent,
    HeavydogsComponent,
    AlldogdetailsComponent,
    LightdogdetailsComponent,
    NormaldogdetailsComponent,
    HeavydogdetailsComponent,
    AllpetsComponent,
    LightpetsComponent,
    HeavypetsComponent,
    NormalpetsComponent,
    HomeComponent,
    AllCatsComponent,
    LightCatsComponent,
    NormalCatsComponent,
    HeavyCatsComponent,
    CatsDetailsComponent,
    AllpetsDetailsComponent,
    LightpetsDetailsComponent,
    HeavypetsDetailsComponent,
    NormalpetsDetailsComponent,
    AccessoriesComponent,
    UserComponent,
    LoginComponent,
    SignupComponent,
    AllBirdsComponent,
    LightBirdsComponent,
    HeavyBirdsComponent,
    NormalBirdsComponent,
    AllDetailsComponent,
    LightlDetailsComponent,
    HeavyDetailsComponent,
    NormalDetailsComponent,
    PageNotfoundComponent,
    HeavyCatsDetailsComponent,
    LightCatsDetailsComponent,
    NormalCatsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[BirdsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
