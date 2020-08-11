import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {UserserviceService} from './../Services/userservice.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  get username(){
    return this.registrationForm.get('username')
  }
  get email(){
    return this.registrationForm.get('email')
  }

  get password(){
    return this.registrationForm.get('password')
  }
  get confirmpassword(){
    return this.registrationForm.get('confirmpassword')
  }
  constructor(private router: Router,private fb:FormBuilder,private userservice:UserserviceService) {

   
   }

  registrationForm=this.fb.group({
    username:['',[Validators.required,Validators.minLength(4)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(8)]],
    confirmpassword:['',[Validators.required,Validators.minLength(8)]]
  })
  

 
  

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.registrationForm.value.password===this.registrationForm.value.confirmpassword){
    this.userservice.userRegister(this.registrationForm.value)
    .subscribe(
      response=>{
        if(response){
          console.log(response)
          console.log(response.data.Username)
          
          sessionStorage.setItem("user",response.data.Username)
          this.userservice.username2=response.data.Username
          localStorage.setItem("token",response.token)
        
            this.router.navigate(['special'])
          
  
        }
      },
      error=>console.log("Error: "+error)
    )
  }
    else{
      alert("Password do not match")
    }
  }


}
