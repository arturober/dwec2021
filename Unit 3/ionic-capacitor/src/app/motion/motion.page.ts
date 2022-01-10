import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { PluginListenerHandle } from '@capacitor/core';
import { Motion } from '@capacitor/motion';

@Component({
  selector: 'app-motion',
  templateUrl: './motion.page.html',
  styleUrls: ['./motion.page.scss']
})
export class MotionPage implements OnDestroy {
  accelListener: PluginListenerHandle;
  orientListener: PluginListenerHandle;
  acceleration = { x: 0, y: 0, z: 0 };
  orientation = { alpha: 0, beta: 0, gamma: 0 };
  started = false;

  constructor(private ngZone: NgZone) {}

  async startMotion() {
    this.accelListener = Motion.addListener('accel', event => {
      this.ngZone.run(() => (this.acceleration = event.acceleration));
    });
    this.orientListener = Motion.addListener('orientation', event => {
      this.ngZone.run(() => {
        this.orientation.alpha = event.alpha;
        this.orientation.beta = event.beta;
        this.orientation.gamma = event.gamma;
      });
    });

    this.started = true;
  }

  ngOnDestroy() {
    Motion.removeAllListeners();
  }
}
