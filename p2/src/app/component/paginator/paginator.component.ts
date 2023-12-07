import { Component, EventEmitter, OnInit } from '@angular/core';
import{ Input } from '@angular/core';
import{ Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  constructor() { }
  @Input() page: any;

  @Output() postPageEvent = new EventEmitter<number>()
  postPage(){
    this.postPageEvent.emit(this.page)
  }
  ngOnInit(): void {
  }
  nextPage(){
    this.page++
    this.postPage()
  }
  prevPage(){
    if(this.page>1){
      this.page--
    }
    this.postPage()
  }

}
