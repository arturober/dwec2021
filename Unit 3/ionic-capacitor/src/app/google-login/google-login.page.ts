import { Component, OnInit } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.page.html',
  styleUrls: ['./google-login.page.scss'],
})
export class GoogleLoginPage {
  user = null;

  async login() {
    try {
      this.user = await GoogleAuth.signIn();
    } catch (err) {
      console.error(err);
    }
  }

}
