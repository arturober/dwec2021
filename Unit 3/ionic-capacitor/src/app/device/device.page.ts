import { Component, OnInit } from '@angular/core';
import { Device, DeviceInfo, BatteryInfo } from '@capacitor/device';

@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})
export class DevicePage implements OnInit {
  info: DeviceInfo;
  battery: BatteryInfo;

  constructor() { }

  async ngOnInit() {
    this.info = await Device.getInfo();
    this.battery = await Device.getBatteryInfo();
  }
}
