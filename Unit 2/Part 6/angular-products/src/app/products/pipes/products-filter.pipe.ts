import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'productsFilter',
})
export class ProductsFilterPipe implements PipeTransform {
  transform(products: Product[], filter: string): Product[] {
    return products.filter((p) =>
      p.description.toLowerCase().includes(filter.toLowerCase())
    );
  }
}
