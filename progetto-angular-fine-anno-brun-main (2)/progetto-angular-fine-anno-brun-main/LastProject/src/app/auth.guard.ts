import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

//se l'utente è loggato, ritorna true e quindi può accedere alla pagina riservata
//altrimenti viene reindirizzato alla pagina di login
export const authGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('loggato') == "true")
    {
      return true;
    }
  else
    inject(Router).navigate(['/login']);
    return false;
};
