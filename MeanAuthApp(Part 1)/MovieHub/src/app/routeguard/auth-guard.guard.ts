import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserserviceService } from '../Services/userservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
constructor(private router :Router,private userservice:UserserviceService) { }
  canActivate() : boolean{

    if(this.userservice.loggedIn()){
      return true;
    }else{
      this.router.navigate(['login'])
      return false;
    }

  }
  
}
