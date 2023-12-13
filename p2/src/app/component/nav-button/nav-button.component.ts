import { Component, EventEmitter, OnInit } from '@angular/core';
import { faGamepad, faShoppingCart  } from '@fortawesome/free-solid-svg-icons';
import{ Output } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent implements OnInit {
  faGamepad=faGamepad;
  faShoppingCart=faShoppingCart;
  mostraComponente1: boolean = true;
  @Output() mandaDatiEvento = new EventEmitter<string>()
  constructor( ) { }

  ngOnInit(): void {
  }
  showCart(){
    //this.CartComponent.getProductGame() //!completare emit

  }

}
