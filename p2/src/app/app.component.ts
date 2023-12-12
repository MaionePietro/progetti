import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { catchError, map, of } from 'rxjs';
//import { faCoffee, faFaucet  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dataGames: any =[]
  page : number = 1
  arrayCart: Array<number> = []
  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.getDati()
    this.page = 1
    this.getGamePages(2)
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
  getGamePages(page: number){
    console.log(page)
    this.apiService.getGamePages(page).pipe(
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
  pushArrayCart(product: number){
    this.arrayCart.push(product)    
  }
}
