import { Component, OnInit } from '@angular/core';
import {StarRatingComponent} from 'ng-starrating'
import { UserserviceService } from '../Services/userservice.service';

@Component({
  selector: 'app-regular',
  templateUrl: './regular.component.html',
  styleUrls: ['./regular.component.css']
})
export class RegularComponent implements OnInit {
  imageObject = [
    {
      Name: "Iron Man 1",
      url: "./../assets/reqular/ironman1.jpg",
      value: "Iron Man 1",
      downloadLink:"https://www.yst.am/movies/iron-man-2008"
    },
    {
      Name: "Iron Man 3",
      url: "./../assets/reqular/ironman3.jpg",
      value: "Iron Man 3",
      downloadLink:"https://www.yst.am/movies/iron-man-3-2013"
  

    },
    {
      Name: "Bad Boys",
      url: "./../assets/reqular/badboys.jpg",
      value: "Bad Boys",
      downloadLink:"https://www.yst.am/movies/bad-boys-1995"
  
    },
    {
      Name: "Breakfast on Pluto",
      url: "./../assets/reqular/brkfst.jpg",
      value: "Breakfast on Pluto",
      downloadLink:"https://www.yst.am/movies/breakfast-on-pluto-2005"
  
    },
    {
      Name: "The Curious Female",
      url: "./../assets/reqular/c1.jpg",
      value: "The Curious Female",
      downloadLink:"https://www.yst.am/movies/the-curious-female-197"
  
    },
    {
      Name: "Hindi Medium",
      url: "./../assets/reqular/hindimedium.jpg",
      value: "Hindi Medium",
      downloadLink:"https://www.yst.am/movies/hindi-medium-20178"
  
    },
    {
      Name: "URI:The Surgical Strike",
      url: "./../assets/reqular/uri.webp",
      value: "URI:The Surgical Strike",
      downloadLink:"https://www.yst.am/movies/uri-the-surgical-strike-2019"
  
    },
    {
      Name: "Batman: The Dark Knight Rises",
      url: "./../assets/reqular/darkknight.jpg",
      value: "Batman: The Dark Knight Rises",
      downloadLink:"https://www.yst.am/movies/the-dark-knight-rises-2012"
  
    },
    {
      Name: "Batman Begins",
      url: "./../assets/reqular/BatmanBegins.jpg",
      value: "Batman Begins",
      downloadLink:"https://www.yst.am/movies/batman-begins-2005"
  
    }
  ]

  constructor(private userservice:UserserviceService) { }
  ngOnInit(): void {
  }

  
}
