import { Component, EventEmitter, OnInit } from '@angular/core';
import{ Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  serchGame = ''
  constructor() { }

  ngOnInit(): void {
  }
  @Output() mandaDatiEvento = new EventEmitter<string>()
  
  mandaDati(){
    this.mandaDatiEvento.emit(this.serchGame)
  }
}
