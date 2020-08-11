import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  username2="Guest"
  constructor(private http:HttpClient,private router:Router) { 
    console.log("service")
this.username2=localStorage.getItem("user")
console.log(this.username2)

  }

  userRegister(userdata){
    return  this.http.post<any>("https://localhost:5000/user/register",userdata);
      
     }

     LoginHandler(userdata){
      return  this.http.post<any>("https://localhost:5000/user/login",userdata);
        
       }

       loggedIn(){
         return !!localStorage.getItem("token")
       }

       logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        this.router.navigate(['movie'])
       }
       getToken(){
        return localStorage.getItem("token")
       }
}
