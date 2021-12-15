import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ConfirmModalComponent],
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  exports: [ConfirmModalComponent],
})
export class ModalsModule {}
