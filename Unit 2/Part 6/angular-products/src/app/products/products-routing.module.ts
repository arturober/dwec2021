import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeavePageGuard } from '../guards/leave-page.guard';
import { ProductIdGuard } from './guards/product-id.guard';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductResolver } from './resolvers/product.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    data: { animation: 'productList' },
  },
  // :id is a parameter (product's id)
  {
    path: ':id',
    component: ProductDetailComponent,
    canActivate: [ProductIdGuard],
    resolve: {
      product: ProductResolver,
    },
    data: { animation: 'productDetail' },
  },
  {
    path: ':id/edit',
    canActivate: [ProductIdGuard],
    canDeactivate: [LeavePageGuard],
    component: ProductFormComponent,
    resolve: {
      product: ProductResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
