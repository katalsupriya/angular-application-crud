import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import reactive form
import { ReactiveFormsModule } from '@angular/forms';
//import signin component
import { SigninComponent } from './pages/account/signin/signin.component';
//import register component
import { RegisterComponent } from './pages/account/register/register.component';
//import home component
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
//import http module
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    //declare signin component
    SigninComponent,
    //declare register component
    RegisterComponent,
    //declare register component
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //imports reactive form module
    ReactiveFormsModule,  
    //import http module
    HttpClientModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
