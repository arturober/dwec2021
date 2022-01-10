import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Clipboard } from '@capacitor/clipboard';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.page.html',
  styleUrls: ['./clipboard.page.scss'],
})
export class ClipboardPage {
  text = '';

  constructor(private toastCtrl: ToastController) { }

  async copy() {
    await Clipboard.write({
      // eslint-disable-next-line id-blacklist
      string: this.text
    });

    const toast = await this.toastCtrl.create({
      message: 'Text copied',
      duration: 1500,
      position: 'middle',
    });
    toast.present();
  }

  async paste() {
    const result = await Clipboard.read();

    this.text = result.value;
  }

}
