import { Component, OnInit } from '@angular/core';
import { faGamepad, faShoppingCart  } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent implements OnInit {
  faGamepad=faGamepad;
  faShoppingCart=faShoppingCart;

  constructor() { }

  ngOnInit(): void {
  }

}
