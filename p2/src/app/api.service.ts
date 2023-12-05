import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  key = '9a256128f2924f76a792c54296827720'
  constructor(private http:HttpClient) {}
  public apriUrl='https://api.rawg.io/api/games?key=9a256128f2924f76a792c54296827720&dates=2019-09-01,2019-09-30&platforms=18,1,7'

  getDati(): Observable<any>{
    return this.http.get<any>(this.apriUrl)
  }
}
