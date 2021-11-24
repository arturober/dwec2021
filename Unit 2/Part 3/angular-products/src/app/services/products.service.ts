import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, retry, tap, throwError } from 'rxjs';
import { Product, ProductsResponse } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly productURL = 'http://arturober.com:5001/products';

  constructor(private readonly http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<ProductsResponse>(this.productURL).pipe(
      map((resp) => resp.products),
      catchError((resp: HttpErrorResponse) =>
        throwError(
          () =>
            `Error getting products. Status: ${resp.status}. Message: ${resp.message}`
        )
      )
    );
  }

  changeRating(idProduct: number, rating: number): Observable<void> {
    return this.http.put<void>(`${this.productURL}/${idProduct}/rating`, {
      rating,
    });
  }
}
