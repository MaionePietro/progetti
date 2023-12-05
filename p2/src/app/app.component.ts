import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dataGames: any =[]

  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.apiService.getDati().pipe(
      map (result =>{
        this.dataGames = result.results
        console.log(this.dataGames)
      }),
      catchError(error => {
        console.error(error);
        return of(error)
      })
    ).subscribe()
  }
}
