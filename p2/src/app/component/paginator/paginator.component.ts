import { Component, OnInit } from '@angular/core';
import{ Input } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  constructor() { }
  @Input() page: any;
  
  ngOnInit(): void {
  }

}
