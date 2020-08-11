import { Component, OnInit } from '@angular/core';
import { UserserviceService } from './Services/userservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MovieHub';
  username=""

  constructor(public authservice:UserserviceService){
  }
  ngOnInit(){ 
  }

  logout(){
    this.username="Guest"
 
    this.authservice.logout()
  }

  
}
