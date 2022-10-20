import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { CampingPageComponent } from './camping-page/camping-page.component';
import { GolfPageComponent } from './golf-page/golf-page.component';
import { MountainPageComponent } from './mountain-page/mountain-page.component';
import { AccessoryPageComponent } from './accessory-page/accessory-page.component';
import { OutdoorPageComponent } from './outdoor-page/outdoor-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CreateProductComponent } from './product-module/create-product/create-product.component';
import { UpdateProductComponent } from './product-module/update-product/update-product.component';
import { ProductDetailsComponent } from './product-module/product-details/product-details.component';
// import { Routes } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
    CampingPageComponent,
    GolfPageComponent,
    MountainPageComponent,
    AccessoryPageComponent,
    OutdoorPageComponent,
    CartPageComponent,
    CreateProductComponent,
    UpdateProductComponent,
    ProductDetailsComponent
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
