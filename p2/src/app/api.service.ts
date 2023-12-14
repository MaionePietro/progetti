import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; //consultare documentazione
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  public key = '9a256128f2924f76a792c54296827720'
  constructor(private http:HttpClient) {}
  public apriUrl='https://api.rawg.io/api/games'

  getDati(): Observable<any>{
    const params = new HttpParams().set('key', this.key)
    return this.http.get<any>(`${this.apriUrl}`, {params})
  }
  getGameName(searchGame:string): Observable<any>{
    const params = new HttpParams().set('search', searchGame).set('key', this.key)
    return this.http.get<any>(`${this.apriUrl}`, {params})
  }
  getGameConsole(searchGame:string): Observable<any>{
    const params = new HttpParams().set('search', searchGame).set('key', this.key)
    return this.http.get<any>(`${this.apriUrl}`, {params})
  }
  getGamePages(page:number): Observable<any>{
    const params = new HttpParams().set('page', page).set('key', this.key)
    return this.http.get<any>(`${this.apriUrl}`, {params})
  }
  getProductGame(productIdCart:number): Observable<any> {
    const params = new HttpParams().append("/",productIdCart).set('key', this.key)
    return this.http.get<any>(`${this.apriUrl}`, {params})
  }
}
