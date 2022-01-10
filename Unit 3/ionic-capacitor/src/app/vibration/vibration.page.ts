import { Component, OnInit } from '@angular/core';
import { Haptics, ImpactStyle } from '@capacitor/haptics';


@Component({
  selector: 'app-vibration',
  templateUrl: './vibration.page.html',
  styleUrls: ['./vibration.page.scss'],
})
export class VibrationPage implements OnInit {

  constructor() { }

  ngOnInit() {}

  vibrate() {
    Haptics.vibrate();
  }

  vibrateHard() {
    Haptics.impact({style: ImpactStyle.Heavy});
  }

  vibrateLong() {
    Haptics.vibrate({duration: 1000});
  }
}
