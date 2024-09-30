import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, catchError, of, tap } from "rxjs";
import { AuthService } from "../services/auth.service";
import { loginSuccess, loginFailure } from "./user.action";
import { Router } from "@angular/router";



@Injectable()

export class LoginEffects {
  router:Router = inject(Router)


  /**
   * login$: Handles the login effect by listening for the [Login] User Login action, calling the login method of the AuthService, and then:
   * Mapping the response to a loginSuccess action with the user's name and token.
   * Storing the token and name in local storage.
   * Navigating to the /dashboard route.
  */

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Login] User Login'),
      switchMap(({ username, password }) =>
        this.authService.login(username, password).pipe(
          map(token => loginSuccess( {detail: {name:token.firstName, token: token.accessToken }})),
          tap((tk) => {
            localStorage.setItem('token',tk.detail.token);
            localStorage.setItem('name',tk.detail.name);
            this.router.navigate(['/dashboard'])
          }),
          catchError(error => of(loginFailure({ error })))
        )
      )
    )
  );


  /**
   * logout$: Handles the logout effect by listening for the [Logout] User Logout action,
   * clearing storage using the AuthService, and navigating to the /auth route.
   */

  logout$ = createEffect(() =>
    this.actions$
        .pipe(
            ofType('[Logout] User Logout'),
            tap(action => {
              this.authService.clearStorage();
                this.router.navigate(['/auth']);
            })
        )
,{dispatch: false});

  constructor(private actions$: Actions, private authService: AuthService) {}
}


