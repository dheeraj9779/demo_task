import { Component, inject, OnInit } from '@angular/core';
import { CoreService } from './services/core.service';
import { Store } from '@ngrx/store';
import { Users } from './user.state';
import { selectLogin } from './store/user.selector';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { logout } from './store/user.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'demo_task';
  user:string =''
  authService = inject(AuthService)
  router:Router = inject(Router)

  constructor(private store: Store<{users:Users}>) {
    this.store.select(selectLogin).subscribe(detail => {
      this.user = detail.detail.name
     });
  }

ngOnInit(): void {
  this.user = localStorage.getItem('name') || ''
}

logout(){
  this.store.dispatch(logout());
  // this.authService.clearStorage();
   this.user = '';
  // this.router.navigate(['/auth']);
}

}
