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
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';

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
    UserComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
