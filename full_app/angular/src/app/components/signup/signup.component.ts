import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  name = new FormControl("",[
    Validators.required,
  ])

  email = new FormControl("",[
    Validators.required,
    Validators.email
  ])

  password = new FormControl("",[
    Validators.required,
    Validators.minLength(10)
  ])

  confirmPassword = new FormControl("",[
    Validators.required,
    Validators.minLength(10)
  ])

  confirm(control:AbstractControl):any{
    let p1 = control.get('password');
    let p2 = control.get('confirmPassword');
    if(p1!.value == p2!.value){
      return { 'passwordMismatch': true };
    }
    return null
  }
  signup = new FormGroup({
    email:this.email,
    name:this.name,
    password:this.password,
    confirmPassword:this.confirmPassword
  },{validators:this.confirm})

  onSubmit(){
    console.log(this.signup.value);
  }
}
