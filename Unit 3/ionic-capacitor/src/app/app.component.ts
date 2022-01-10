import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Action Sheet',
      url: '/action-sheet',
      icon: 'chevron-up'
    },
    {
      title: 'App',
      url: '/application',
      icon: 'apps'
    },
    {
      title: 'Barcode Scanner',
      url: '/barcode-scanner',
      icon: 'barcode'
    },
    {
      title: 'Camera',
      url: '/camera',
      icon: 'camera'
    },
    {
      title: 'Clipboard',
      url: '/clipboard',
      icon: 'clipboard'
    },
    // {
    //   title: 'Contacts',
    //   url: '/contacts',
    //   icon: 'people'
    // },
    {
      title: 'Device Info',
      url: '/device',
      icon: 'phone-portrait'
    },
    {
      title: 'Dialogs',
      url: '/dialogs',
      icon: 'alert'
    },
    {
      title: 'Driving directions',
      url: '/driving-directions',
      icon: 'navigate'
    },
    {
      title: 'Facebook Login',
      url: '/facebook-login',
      icon: 'logo-facebook'
    },
    {
      title: 'Filesystem',
      url: '/filesystem',
      icon: 'folder'
    },
    {
      title: 'Flashlight',
      url: '/flashlight',
      icon: 'flashlight'
    },
    {
      title: 'Geolocation',
      url: '/geolocation',
      icon: 'pin'
    },
    {
      title: 'Google Login',
      url: '/google-login',
      icon: 'logo-google'
    },
    {
      title: 'Keyboard',
      url: '/keyboard',
      icon: 'keypad'
    },
    {
      title: 'Local notifications',
      url: '/local-notifications',
      icon: 'notifications'
    },
    {
      title: 'Motion',
      url: '/motion',
      icon: 'move'
    },
    {
      title: 'Network',
      url: '/network',
      icon: 'wifi'
    },
    {
      title: 'Social sharing',
      url: '/share',
      icon: 'share'
    },
    {
      title: 'SQLite',
      url: '/sqlite',
      icon: 'grid'
    },
    {
      title: 'Storage',
      url: '/storage',
      icon: 'logo-buffer'
    },
    {
      title: 'Toast',
      url: '/toast',
      icon: 'alarm'
    },
    {
      title: 'Vibration',
      url: '/vibration',
      icon: 'pulse'
    },
  ];

  constructor(
    private platform: Platform,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    if (this.platform.is('capacitor')) {
      this.platform.ready().then(() => {
        SplashScreen.hide();
        StatusBar.setBackgroundColor({ color: '#3880ff' });
        StatusBar.setStyle({ style: Style.Dark });
        GoogleAuth.initialize();
      });
    }
  }

}
