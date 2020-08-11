import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../Services/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }
username="Guest"
constructor(private router :Router,private fb:FormBuilder,private userservice:UserserviceService) { }

loginForm=this.fb.group({
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required,Validators.minLength(8)]],
  })

ngOnInit(): void {
}


LoginHandler(){
  this.userservice.LoginHandler(this.loginForm.value)
  .subscribe(
    response=>{
      if(response){
        console.log(response)
        
        sessionStorage.setItem("user",response.data.Username)
        this.userservice.username2=response.data.Username
        localStorage.setItem("token",response.token)
        
      
          this.router.navigate(['special'])
      

      }
    },
    error=>console.log("Error: "+error.message)
  )

}

SignupHandler(){

  this.router.navigate(['signup'])
}
}
