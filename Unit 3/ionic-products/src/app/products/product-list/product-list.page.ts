import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../interfaces/product.interface';
import { ActionSheetController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private actionSheetCtrl: ActionSheetController,
    private navController: NavController
  ) {}

  ionViewWillEnter() {
    this.productService
      .getProducts()
      .subscribe((prods) => (this.products = prods));
  }

  async showOptions(prod: Product) {
    const actSheet = await this.actionSheetCtrl.create({
      header: prod.description,
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.productService
              .deleteProduct(prod.id)
              .subscribe(() =>
                this.products.splice(this.products.indexOf(prod), 1)
              );
          },
        },
        {
          text: 'See details',
          icon: 'eye',
          handler: () => {
            this.navController.navigateForward(['/products/details', prod.id]);
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
        },
      ],
    });

    actSheet.present();
  }
}
