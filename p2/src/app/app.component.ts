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
  serchGame = ''
  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.getDati()
  }

  getDati(){
    this.apiService.getDati().pipe(
      map (result =>{
        this.dataGames = result.results
      }),
      catchError(error => {
        console.error(error);
        return of(error)
      })
    ).subscribe()
  }
  getGameName(){
    console.log("ciao")
    this.apiService.getGameName(this.serchGame).pipe(
      map (result =>{
        this.dataGames = result.results
      }),
      catchError(error => {
        console.error(error);
        return of(error)
      })
    ).subscribe()
  }
}
