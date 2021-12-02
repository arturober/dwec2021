import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsFilterPipe } from './pipes/products-filter.pipe';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { RatingModule } from '../rating/rating.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductsFilterPipe,
    ProductItemComponent,
    ProductDetailComponent,
    ProductFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    RatingModule
  ]
})
export class ProductsModule { }
