import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';
import { ContactsComponent } from './layouts/contacts/contacts.component';
import { authGuard } from './guards/auth.guard';
import { notAuthGuard } from './guards/not-auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MainComponent
  },
  {
    path: 'auth',
    canActivate: [notAuthGuard],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadChildren: () => import('./layouts/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'contact',
    component: ContactsComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
