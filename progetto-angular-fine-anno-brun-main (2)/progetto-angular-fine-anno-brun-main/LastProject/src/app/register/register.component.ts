import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterLink } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  mail: string = "";
  password: string = "";

  constructor(private auth: AuthService) { }

  //metodo per effettuare la registrazione
  //se non ha inserito tutti i campi, viene visualizzato un alert
  signup() {
    if (this.mail == "" || this.password == "") {
      alert("Inserire tutti i campi!");
      return;
    }

    this.auth.signup(this.mail, this.password);

    this.mail = "";
    this.password = "";
  }
}

