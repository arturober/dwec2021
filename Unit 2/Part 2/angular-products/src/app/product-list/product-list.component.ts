import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Product } from '../interfaces/product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  title = "My product's list";
  headers = {
    description: 'Product',
    price: 'Price',
    available: 'Available',
    image: 'Image',
  };

  products: Product[] = [
    {
      id: 1,
      description: 'SSD hard drive',
      available: '2016-10-03',
      price: 75,
      imageUrl: 'assets/ssd.jpg',
      rating: 5,
    },
    {
      id: 2,
      description: 'LGA1151 Motherboard',
      available: '2016-09-15',
      price: 96.95,
      imageUrl: 'assets/motherboard.jpg',
      rating: 4,
    },
    {
      id: 3,
      description: '1TB hard disk',
      available: '2019-12-15',
      price: 36.75,
      imageUrl: 'assets/hdd.jpg',
      rating: 2,
    },
    {
      id: 4,
      description: '8x2 DDR4 3200Mhz',
      available: '2020-01-23',
      price: 67.58,
      imageUrl: 'assets/ram.jpg',
      rating: 3,
    },
  ];
  showImage = true;
  filterSearch = '';

  constructor() {}

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
