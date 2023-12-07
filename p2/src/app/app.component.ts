import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { catchError, map, of } from 'rxjs';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faFaucet  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dataGames: any =[]
  serchGame = ''
  faCoffee = faCoffee;
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
  
  getGameName(value: string){
    console.log(value)
    this.apiService.getGameName(value).pipe(
      map (result =>{
        this.dataGames = result.results
        console.log(result.results)
      }),
      catchError(error => {
        console.error(error);
        return of(error)
      })
    ).subscribe()
  }
}
