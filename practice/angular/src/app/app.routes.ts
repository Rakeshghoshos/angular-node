import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'services',component:ServicesComponent},
  {path:'about',component:AboutComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];
