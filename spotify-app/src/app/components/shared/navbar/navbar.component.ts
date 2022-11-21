import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../../search/search.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent{

  constructor( private search: SearchComponent) {}
  
}
