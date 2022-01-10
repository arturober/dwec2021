import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { PluginListenerHandle } from '@capacitor/core';
import { Network, ConnectionStatus } from '@capacitor/network';

@Component({
  selector: 'app-network',
  templateUrl: './network.page.html',
  styleUrls: ['./network.page.scss'],
})
export class NetworkPage implements OnInit, OnDestroy {
  type = 'none';
  connected = false;
  connHandler: PluginListenerHandle;

  constructor(private zone: NgZone) {}

  async ngOnInit() {
    this.setConnection(await Network.getStatus());

    this.connHandler = Network.addListener('networkStatusChange', (status) =>
      this.setConnection(status)
    );
  }

  ngOnDestroy() {
    Network.removeAllListeners();
  }

  setConnection(status: ConnectionStatus) {
    this.zone.run(() => {
      this.connected = status.connected;
      this.type = status.connectionType;
    });
  }
}
