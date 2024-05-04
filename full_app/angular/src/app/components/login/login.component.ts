import { ProfileService } from './../../services/profile.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
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

  constructor(private profile:ProfileService){}

  login(){
   this.profile.getProfile(this.loginForm.value).subscribe({
    next:(value)=>console.log(value),
    error:(err)=>console.log(err.message)
   });
  }

  reset(){
    this.loginForm.reset();
  }
}
