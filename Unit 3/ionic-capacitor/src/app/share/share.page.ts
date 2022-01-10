import { Component, OnInit } from '@angular/core';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage {
  message = '';

  constructor() { }

  share() {
    Share.share({
      dialogTitle: 'Share with others!',
      text: this.message
    });
  }
}
