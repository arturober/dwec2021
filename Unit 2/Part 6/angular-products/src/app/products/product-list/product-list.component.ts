import {
  animate,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgModel } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [
    trigger('animateList', [
      transition(':enter', [
        query('product-item', [
          style({ opacity: 0, transform: 'translateX(-100px)' }),
          stagger(
            100,
            animate('500ms ease-out', style({ opacity: 1, transform: 'none' }))
          ),
        ]),
      ]),
    ]),
    trigger('animateProd', [
      state('selected', style({ borderLeft: '40px lightgreen solid' })),
      transition('* => selected', animate('200ms ease-in')),
      transition('selected => *', animate('200ms ease-out')),
    ]),
  ],
})
export class ProductListComponent implements OnInit, OnDestroy {
  title = "My product's list";
  headers = {
    description: 'Product',
    price: 'Price',
    available: 'Available',
    image: 'Image',
    rating: 'Rating',
  };

  products: Product[] = [];
  showImage = true;
  filterSearch = '';

  constructor(
    private readonly productsService: ProductsService,
    private readonly titleService: Title
  ) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe({
      next: (products) => (this.products = products),
      error: (error) => console.log(error),
    });
    this.titleService.setTitle('Product list | Angular products');
  }

  ngOnDestroy(): void {
    console.log('Product list has been destroyed!');
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  toggleSelect(prod: Product) {
    prod.state = prod.state === 'selected' ? '' : 'selected';
  }
}
