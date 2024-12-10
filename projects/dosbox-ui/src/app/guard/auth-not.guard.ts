import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/account/authentication.service';

export const authNotGuard = () => {
  const auth = inject(AuthenticationService);
  const router = inject(Router);
    if(auth.isAuthenticated()) {
    router.navigate(['']);
    return false;
  }
  return true;
};
