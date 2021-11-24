import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product, ProductsResponse } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly productURL = 'http://arturober.com:5001/products';

  constructor(private readonly http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<ProductsResponse>(this.productURL).pipe(
      map(resp => resp.products)
    );
  }
}
