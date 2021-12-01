import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  catchError,
  delay,
  map,
  Observable,
  retry,
  tap,
  throwError,
} from 'rxjs';
import {
  Product,
  ProductResponse,
  ProductsResponse,
} from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly productURL = '/products';

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

  getProduct(id: number): Observable<Product> {
    return this.http
      .get<ProductResponse>(`${this.productURL}/${id}`)
      .pipe(map((resp) => resp.product));
  }

  changeRating(idProduct: number, rating: number): Observable<void> {
    return this.http.put<void>(`${this.productURL}/${idProduct}/rating`, {
      rating,
    });
  }
}
