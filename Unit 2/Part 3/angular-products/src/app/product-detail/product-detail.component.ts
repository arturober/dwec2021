import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product!: Product;

  constructor(
    private readonly titleService: Title,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Product details | Angular products');
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          return this.productsService.getProduct(+params.get('id')!);
        })
      )
      .subscribe({
        next: (product) => (this.product = product),
        error: (error) => {
          console.log(error);
          this.router.navigate(['/products']);
        },
      });
    //const id = +this.route.snapshot.paramMap.get('id')!;
  }
}
