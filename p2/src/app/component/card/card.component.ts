import { Component, EventEmitter, OnInit } from '@angular/core';
import{ Input, Output } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() game: any;
  @Output() addCartEvent = new EventEmitter<number>()


  constructor() { }

  ngOnInit(): void {
  }
  addCart(){
    this.addCartEvent.emit(this.game.id)
  }

}
