import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RegularComponent } from './regular/regular.component';
import { SpecialComponent } from './special/special.component';
import { AuthGuard } from './routeguard/auth-guard.guard';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', redirectTo:'/movie',pathMatch:'full'},
  { path: 'movie', component: RegularComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'special', component: SpecialComponent,canActivate:[AuthGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
