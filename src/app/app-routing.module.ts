import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoryPageComponent } from './accessory-page/accessory-page.component';
import { CampingPageComponent } from './camping-page/camping-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { GolfPageComponent } from './golf-page/golf-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MountainPageComponent } from './mountain-page/mountain-page.component';
import { OutdoorPageComponent } from './outdoor-page/outdoor-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterPageComponent },
  { path: 'home', component:HomePageComponent},
  { path: 'camping', component:CampingPageComponent},
  { path: 'golf', component:GolfPageComponent },
  { path: 'mountain', component:MountainPageComponent},
  { path: 'outdoor', component:OutdoorPageComponent},
  { path: 'accessory', component:AccessoryPageComponent },
  { path: 'cart', component:CartPageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
