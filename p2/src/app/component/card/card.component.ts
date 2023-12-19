import { Component, EventEmitter, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/matirialComponent/popup/popup.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() game: any;
  @Output() addCartEvent = new EventEmitter<number>();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  addCart() {
    this.addCartEvent.emit(this.game.id);
  }
  openDialog() {
    this.dialog.open(PopupComponent),
      {
        data: {
          animal: 'panda',
        },
      };
  }
}
