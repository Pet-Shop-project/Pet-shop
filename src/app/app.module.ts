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
    NormalpetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
