import { Component } from '@angular/core';
import { ActionSheet, ActionSheetButtonStyle } from '@capacitor/action-sheet';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage {
  option = -1;

  async showActions() {
    const result = await ActionSheet.showActions({
      title: 'Photo Options',
      message: 'Select an option to perform',
      options: [
        {
          title: 'Upload',
        },
        {
          title: 'Share'
        },
        {
          title: 'Remove',
          style: ActionSheetButtonStyle.Destructive
        },
        {
          title: 'Cancel',
          style: ActionSheetButtonStyle.Cancel
        }
      ]
    });

    this.option = result.index;
  }
}
