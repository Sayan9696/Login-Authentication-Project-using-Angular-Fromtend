import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms'
import { ApiService } from './api/api.service';
import { HttpClientModule } from '@angular/common/http';
import { GallaryComponent } from './gallary/gallary.component';
import { AuthGuardAdmin } from './auth.guard';


const appRoutes: Routes =
  [{ path: '', component: AuthComponent },
  { path: 'auth', component: AuthComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  { path: 'gallary/:id/:name', component: GallaryComponent, canActivate: [AuthGuardAdmin] }
  ]
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    GallaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
//ApiService
export class AppModule { }
