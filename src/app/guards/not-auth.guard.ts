import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

/**
 * Guard to check if the user is not logged in. If the user is logged in
 * then alert the user and redirect them to the dashboard page and if loggedout then redirect to login.
 * @returns {boolean} True if the user is not logged in, false otherwise.
 */
export const notAuthGuard: CanActivateFn = (route, state) => {
  const router:Router = inject(Router)
  const authService = inject(AuthService)
  if(authService.checkAuthentication()){
    alert("You are already loggedin");
    router.navigate(['/dashboard'])
    return false;
  }
  return true;
};
