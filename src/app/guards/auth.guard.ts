import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

/**
 * Auth Guard: This guard will check if the user is authenticated or not.
 * If the user is authenticated, then it will return true, else it will return false
 * and show an alert message to the user.
 * @returns A boolean indicating whether the user is authenticated or not
 */
export const authGuard: CanActivateFn = (route, state) => {
  const router:Router = inject(Router)
  const authService = inject(AuthService)
  if(authService.checkAuthentication()){
    return true;
  }
  alert("You Don't have access, Please login first!!");
  router.navigate(['/auth'])
  return false;
};
