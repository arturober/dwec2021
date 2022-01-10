import { Component, OnInit } from '@angular/core';
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage {
  async showToast() {
    await Toast.show({
      text: 'I\'m a toast notification',
      duration: 'short'
    });
  }

}
