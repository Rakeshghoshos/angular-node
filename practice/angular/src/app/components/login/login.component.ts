import { ApiManager } from './../../utils/apiManager';
import { ProfileService } from './../../services/profile.service';
import { Router, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  providers:[ProfileService,HttpClient,ApiManager],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  email = new FormControl("",[
    Validators.required,
    Validators.email
  ])

  password = new FormControl("",[
    Validators.required,
    Validators.minLength(10)
  ])

  loginForm = new FormGroup({
    email:this.email,
    password:this.password
  })

  constructor(private router:Router,private profile:ProfileService){}

  login(){
    this.profile.request(this.loginForm.value);
  }
  reset(){
    this.loginForm.reset();
  }

  signup(){
    this.router.navigate(['/signup']);
  }
}
