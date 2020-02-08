import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { AlldogsComponent } from './dogs/alldogs/alldogs.component';
import { LightdogsComponent } from './dogs/lightdogs/lightdogs.component';
import { NormaldogsComponent } from './dogs/normaldogs/normaldogs.component';
import { HeavydogsComponent } from './dogs/heavydogs/heavydogs.component';
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
    AllpetsComponent,
    LightpetsComponent,
    HeavypetsComponent,
    NormalpetsComponent,
    HomeComponent,
    AllCatsComponent,
    LightCatsComponent,
    NormalCatsComponent,
    HeavyCatsComponent,
    CatsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
