import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectError, selectIsLoading, selectLogin, selectToken } from '../../store/user.selector';
import { login } from '../../store/user.action';
import { Users } from '../../user.state';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = '';
  password = '';
  token = '';
  error = '';
  isLoading = false;
  disab = ''

  router:Router = inject(Router)
  constructor(private store: Store<{users:Users}>) {
    this.disab = localStorage.getItem('token') || '';
    this.store.select(selectLogin).subscribe(token => {
     });
    this.store.select(selectError).subscribe(error => (this.error = error));
    this.store.select(selectIsLoading).subscribe(isLoading => (this.isLoading = isLoading));
  }

  onSubmit() {
    this.store.dispatch(login({ username: this.username, password: this.password }));
  }

}
