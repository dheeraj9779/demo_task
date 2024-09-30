import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpcofigInterceptor } from './httpcofig.interceptor';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { loginReducer} from './store/user.reducer';
import { NotFoundComponent } from './layouts/not-found/not-found.component'
import { ContactsComponent } from './layouts/contacts/contacts.component';
import { LoginEffects } from './store/user.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NotFoundComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    StoreModule.forRoot({ users: loginReducer }),
    EffectsModule.forRoot(LoginEffects),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [provideHttpClient(withInterceptors([httpcofigInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
