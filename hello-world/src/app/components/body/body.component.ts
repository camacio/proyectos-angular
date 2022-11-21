import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent{

  show = true;

  product : any = {
    name: "Tomato",
    price: 1.2,
    amount: 6
  }

  products : string[] = ["Tomato", "Lettuce", "Pepper", "Onion", "Cucumber"];
  
}
