import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeavePageGuard } from '../guards/leave-page.guard';
import { ProductIdGuard } from './guards/product-id.guard';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductResolver } from './resolvers/product.resolver';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  // :id is a parameter (product's id)
  {
    path: ':id',
    component: ProductDetailComponent,
    canActivate: [ProductIdGuard],
    resolve: {
      product: ProductResolver,
    },
  },
  {
    path: ':id/edit',
    canActivate: [ProductIdGuard],
    canDeactivate: [LeavePageGuard],
    component: ProductFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
