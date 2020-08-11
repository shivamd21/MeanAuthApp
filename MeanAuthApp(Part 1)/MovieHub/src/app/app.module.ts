import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

import {MatCardModule} from '@angular/material/card';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegularComponent } from './regular/regular.component';
import { SpecialComponent } from './special/special.component';
import {AuthGuard} from './routeguard/auth-guard.guard'
import { UserserviceService } from './Services/userservice.service';
import {TokenInterceptorService} from './interceptor/token-interceptor.service'
import {MatIconModule} from '@angular/material/icon'
import {RatingModule} from 'ng-starrating'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    RegularComponent,
    SpecialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatIconModule,
    RatingModule
  ],
  providers: [AuthGuard,UserserviceService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
