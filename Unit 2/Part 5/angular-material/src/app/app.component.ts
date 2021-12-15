import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmModalComponent } from './modals/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  response = '';

  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      data: {
        title: 'Confirmation example',
        body: 'Do you want to marry me?',
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((resp) => {
        this.response = resp ? 'Yes' : 'No'
      });
  }
}
