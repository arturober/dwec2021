import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Input() showImage!: boolean;

  constructor(private readonly productsService: ProductsService) {}

  changeRating(rating: number) {
    const oldRating = this.product.rating;
    this.product.rating = rating;
    this.productsService.changeRating(this.product.id!, rating).subscribe({
      error: error => this.product.rating = oldRating
    });
  }
}
