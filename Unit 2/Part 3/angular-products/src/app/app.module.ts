import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';
import { ProductsFilterPipe } from './pipes/products-filter.pipe';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { ProductIdGuard } from './guards/product-id.guard';
import { ProductFormComponent } from './product-form/product-form.component';
import { LeavePageGuard } from './guards/leave-page.guard';
import { ProductResolver } from './resolvers/product.resolver';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'products', component: ProductListComponent },
  // :id is a parameter (product's id)
  {
    path: 'products/:id',
    component: ProductDetailComponent,
    canActivate: [ProductIdGuard],
    resolve: {
      product: ProductResolver
    }
  },
  {
    path: 'products/:id/edit',
    canActivate: [ProductIdGuard],
    canDeactivate: [LeavePageGuard],
    component: ProductFormComponent,
  },
  // Default route (empty) -> Redirect to welcome page
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  // Doesn't match any of the above
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductsFilterPipe,
    ProductItemComponent,
    StarRatingComponent,
    WelcomeComponent,
    ProductDetailComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
