import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolver implements Resolve<Product> {
  constructor(
    private readonly productsService: ProductsService,
    private readonly router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product> {
    return this.productsService
      .getProduct(+route.paramMap.get('id')!)
      .pipe(catchError((error) => {
        this.router.navigate(['/products']);
        return EMPTY;
      }));
  }
}
