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
    this.route.data.subscribe({
      next: data => this.product = data['product']
    });
    // this.product = this.route.snapshotdata['product'];

    // Subscribes to changes in the route params (product id)
    // Useful when you have a link here to another product detail (Angular doesn't recreate the page)
    // this.route.paramMap
    //   .pipe(
    //     switchMap((params) => {
    //       return this.productsService.getProduct(+params.get('id')!);
    //     })
    //   )
    //   .subscribe({
    //     next: (product) => (this.product = product),
    //     error: (error) => {
    //       console.log(error);
    //       this.router.navigate(['/products']);
    //     },
    //   });
    // This only works if you have to go to another page first in order to load other product details
    // const id = +this.route.snapshot.paramMap.get('id')!;
    // this.productsService.getProduct(id).subscribe({
    //   next: (product) => this.product = product,
    //   error: (error) => {
    //     console.log(error);
    //     this.router.navigate(['/products']);
    //   },
    // });
  }

  goBack() {
    this.router.navigate(['/products']);
  }

  changeRating(rating: number) {
    const oldRating = this.product.rating;
    this.product.rating = rating;
    this.productsService.changeRating(this.product.id!, rating).subscribe({
      error: error => this.product.rating = oldRating
    });
  }
}
