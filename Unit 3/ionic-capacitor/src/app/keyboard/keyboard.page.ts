import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { Keyboard } from '@capacitor/keyboard';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.page.html',
  styleUrls: ['./keyboard.page.scss'],
})
export class KeyboardPage implements OnInit, OnDestroy {
  visible = false;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    Keyboard.addListener('keyboardWillShow', (info) =>
      this.ngZone.run(() => (this.visible = true))
    );
    Keyboard.addListener('keyboardWillHide', () =>
      this.ngZone.run(() => (this.visible = false))
    );
  }

  ngOnDestroy() {
    Keyboard.removeAllListeners();
  }

  showKeyboard() {
    Keyboard.show(); // Alpha method (may not work well)
  }

  hideKeyboard() {
    Keyboard.hide();
  }
}
