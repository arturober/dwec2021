import { Component, OnInit, OnDestroy } from '@angular/core';
import { App, BackButtonListenerEvent } from '@capacitor/app';
import { PluginListenerHandle } from '@capacitor/core';
import { Dialog } from '@capacitor/dialog';

@Component({
  selector: 'app-application',
  templateUrl: './application.page.html',
  styleUrls: ['./application.page.scss']
})
export class ApplicationPage implements OnInit, OnDestroy {
  backHandler: PluginListenerHandle;

  constructor() {}

  async ngOnInit() {
    this.backHandler = App.addListener('backButton', async (event) => {
      const resp = await Dialog.confirm({
        title: 'Close app',
        message: 'Do you really want to exit?',
        okButtonTitle: 'Yes, please',
        cancelButtonTitle: 'Never'
      });

      if (resp.value) {
        App.exitApp();
      }
    });
  }

  ngOnDestroy() {
    this.backHandler.remove();
  }
}
