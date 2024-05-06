import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  mail: string = "";
  password: string = "";

  constructor(private auth: AuthService) { }

  //richiamo il metodo per effettuare il login
  //se non ha inserito tutti i campi, viene visualizzato un alert
  login() {
    if (this.mail == "" || this.password == "") {
      alert("Inserire tutti i campi!");
      return;
    }

    this.auth.login(this.mail, this.password);

    this.mail = "";
    this.password = "";
  }
}
