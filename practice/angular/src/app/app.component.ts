import { NavbarComponent } from './components/navbar/navbar.component';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
// import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
