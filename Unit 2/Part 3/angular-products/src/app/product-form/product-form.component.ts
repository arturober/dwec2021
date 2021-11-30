import { Component, OnInit } from '@angular/core';
import { UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../guards/leave-page.guard';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements CanComponentDeactivate {

  constructor() { }

  canDeactivate() {
    return confirm("Do you want to leave? All changes will be lost!");
  }

}
