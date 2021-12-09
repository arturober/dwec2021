import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CanComponentDeactivate } from 'src/app/guards/leave-page.guard';
import { Product } from '../interfaces/product';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements CanComponentDeactivate, OnInit {
  product!: Product;

  constructor(
    private readonly titleService: Title,
    private readonly route: ActivatedRoute
  ) {}

  canDeactivate() {
    return confirm('Do you want to leave? All changes will be lost!');
  }

  ngOnInit(): void {
    this.titleService.setTitle('Edit product | Angular products');
    this.product = this.route.snapshot.data['product'];
    this.product.available = this.product.available.substring(0, 16);
  }

  validClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    return {
      [validClass]: ngModel.touched && ngModel.valid,
      [errorClass]: ngModel.touched && ngModel.invalid,
    };
  }
}
