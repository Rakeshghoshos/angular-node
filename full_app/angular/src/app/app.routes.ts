import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: '**', component: PagenotfoundComponent }
];
