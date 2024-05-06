import { Component } from '@angular/core';
import { RickandmortyComponent } from '../../../pages/rickandmorty/rickandmorty.component';
import { RouterLink } from '@angular/router';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  
}

