import { Routes } from '@angular/router';
import { RickandmortyComponent } from './pages/rickandmorty/rickandmorty.component';
import { DetailCharacterComponent } from './pages/rickandmorty/detail-character/detail-character.component';
import { ChisonoComponent } from './chisono/chisono.component';
import { HomeComponent } from './components/home/home.component';
import { RecapitiComponent } from './recapiti/recapiti.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './auth.guard';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: UserLoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'rickandmorty', component: RickandmortyComponent, canActivate: [authGuard] },
  {
    path: 'rickandmorty/detail-character/:id',
    component: DetailCharacterComponent,
  },
  { path: 'chisono', component: ChisonoComponent},
  { path: 'home', component:  HomeComponent, canActivate: [authGuard]},
  { path: 'recapiti', component: RecapitiComponent},
];
