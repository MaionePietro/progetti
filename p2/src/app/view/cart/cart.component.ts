import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { catchError, map, of } from 'rxjs';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  arrayCart: Array<number> = []
  productCard: any
  ngOnInit(): void {
    this.baseDataCart();
  }

  getProductGame(productIdCart: number) {
    this.apiService
      .getGamePages(productIdCart)
      .pipe(
        map((result) => {
          this.productCard = result.results;
          console.log("🚀 ~ file: cart.component.ts:23 ~ CartComponent ~ map ~ productCard:", this.productCard)
        }),
        catchError((error) => {
          console.error(error);
          return of(error);
        })
      )
      .subscribe();
  }
  baseDataCart(){
    let arrayCartJson: any = localStorage.getItem("arrayCartJson");
    this.arrayCart = JSON.parse(arrayCartJson);
  }
}
