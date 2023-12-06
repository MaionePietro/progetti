import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; //consultare documentazione
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  key = '9a256128f2924f76a792c54296827720'
  constructor(private http:HttpClient) {}
  public apriUrl='https://api.rawg.io/api/games?key=9a256128f2924f76a792c54296827720'

  getDati(): Observable<any>{
    return this.http.get<any>(this.apriUrl)
  }
  getGameName(serchGame:string): Observable<any>{
    const params = new HttpParams().set('search', serchGame)
    // console.log(serchGame)
    return this.http.get<any>(`${this.apriUrl}`, {params})
  }
  getGameConsole(serchGame:string): Observable<any>{
    const params = new HttpParams().set('search', serchGame)
    // console.log(serchGame)
    return this.http.get<any>(`${this.apriUrl}`, {params})
  }
}
