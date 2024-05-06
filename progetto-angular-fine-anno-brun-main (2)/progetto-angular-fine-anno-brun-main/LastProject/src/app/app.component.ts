import { Component, OnInit} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ChisonoComponent } from './chisono/chisono.component';
import { HomeComponent } from './components/home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { initFlowbite } from 'flowbite';

@Component({
  
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ChisonoComponent, HomeComponent, UserLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{


  title = 'RickAndMorty-Angular';
  pathName = '';
  accedi:boolean = false;

  constructor(private router: Router) {
    
    this.router.events.subscribe(() => {
      this.pathName = this.router.url;
    });
    
  }

  ngOnInit(): void {
    initFlowbite();
  }
}
