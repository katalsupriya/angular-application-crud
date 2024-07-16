import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import signin component
import { SigninComponent } from './pages/account/signin/signin.component';
//import register component
import { RegisterComponent } from './pages/account/register/register.component';
//import home component
import { HomeComponent } from './pages/home/home.component';

//declare page path using const
const routes: Routes =[
  {
    path:'signin', 
    component:SigninComponent
  },
  {
    path:'signup',
    component:RegisterComponent
  },
  {
   path:'', //use empty route for set default page property
   component:HomeComponent
  },
  //when user enter wrong url it will redirect set as default page
  {
    path: '**',
    redirectTo: ''
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
