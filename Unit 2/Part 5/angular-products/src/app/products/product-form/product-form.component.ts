import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/guards/leave-page.guard';
import { ConfirmModalComponent } from 'src/app/modals/confirm-modal/confirm-modal.component';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements CanComponentDeactivate, OnInit {
  product!: Product;
  updated = false;
  @ViewChild('productForm') productForm!: NgForm;

  constructor(
    private readonly titleService: Title,
    private readonly route: ActivatedRoute,
    private readonly productsService: ProductsService,
    private readonly router: Router,
    private readonly ngbModal: NgbModal
  ) {}

  canDeactivate() {
    if(this.updated || this.productForm.pristine) {
      return true;
    }

    const modal = this.ngbModal.open(ConfirmModalComponent);
    // Only asks if you want to leave the page
    // modal.componentInstance.title = 'Leave page';
    // modal.componentInstance.body = 'Do you want to leave? All changes will be lost!';
    // return modal.result.catch(e => false);

    // Asks if you want to save changes
    modal.componentInstance.title = 'Save product';
    modal.componentInstance.body = 'Do you want to save changes before leaving?';
    return from(modal.result as Promise<boolean>).pipe(
      switchMap(resp => {
        if(resp) { // User says to save changes
          return this.productsService.updateProduct(this.product).pipe(
            map(p => true)
          );
        } else { // User doesn't want to save changes
          return of(true);
        }
      }),
      catchError(e => of(false)) // If there's any error, don't leave page
    );

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

  updateProduct(): void {
    // Other validations, etc... (call return if you want to cancel the submit)
    if (this.productForm.invalid) return;

    this.productsService.updateProduct(this.product).subscribe({
      next: (p) => {
        this.updated = true;
        this.router.navigate(['/products', this.product.id]);
      },
      error: (error) => console.error(error),
    });
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) return;
    const reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', (e) => {
      this.product.imageUrl = reader.result as string;
    });
  }
}
