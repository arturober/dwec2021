import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';

import { PushNotifications, Token } from '@capacitor/push-notifications';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email = '';
  password = '';
  firebaseToken = null;

  constructor(
    private platform: Platform,
    private authService: AuthService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    if (this.platform.is('capacitor')) {
      PushNotifications.register();

      // On success, we should be able to receive notifications
      PushNotifications.addListener('registration', (token: Token) => {
        this.firebaseToken = token.value;
        console.log(token);
      });
    }
  }

  login() {
    this.authService
      .login(this.email, this.password, this.firebaseToken)
      .subscribe(
        () => this.router.navigate(['/products']),
        async (error) => {
          (
            await this.alertCtrl.create({
              header: 'Login error',
              message: 'Incorrect email and/or password',
              buttons: ['Ok'],
            })
          ).present();
        }
      );
  }
}
