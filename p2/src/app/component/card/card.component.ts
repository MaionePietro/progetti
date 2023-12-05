import { Component, OnInit } from '@angular/core';
import{ Input } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() game: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.game)
  }

}
