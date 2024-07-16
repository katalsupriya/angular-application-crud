import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //create form group and form control object.
  loginForm = new FormGroup({
    name: new FormControl('Bunty', [Validators.required]),
    email: new FormControl('Bunty@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('123123', [Validators.required]),
  });  

  //getter setter for validation
  get name()
   { 
     return this.loginForm.get('name');
  }
  get email()
   { 
     return this.loginForm.get('email');
  }
  get password()
  { 
    return this.loginForm.get('password');
  }

  //check form console value
  loginUser(){
    console.warn(this.loginForm.value);    
  }

}
