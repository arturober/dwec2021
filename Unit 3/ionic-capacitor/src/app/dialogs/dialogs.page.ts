import { Component, OnInit } from '@angular/core';
import { Dialog } from '@capacitor/dialog';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.page.html',
  styleUrls: ['./dialogs.page.scss']
})
export class DialogsPage implements OnInit {
  confirm = false;
  name = '';

  constructor() {}

  ngOnInit() {}

  async showAlert() {
    await Dialog.alert({
      title: 'Hello',
      message: 'This is an alert'
    });
  }

  async showConfirm() {
    const result = await Dialog.confirm({
      title: 'Confirm',
      message: 'Are you going to develop your next app with Ionic?'
    });

    this.confirm = result.value;
  }

  async showPrompt() {
    const result = await Dialog.prompt({
      title: 'Hello',
      message: 'What\'s your name?'
    });

    if (!result.cancelled) {
      this.name = result.value;
    }
  }
}
