import { Component, NgZone, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode-scanner.page.html',
  styleUrls: ['./barcode-scanner.page.scss'],
})
export class BarcodeScannerPage implements OnInit {
  data = '';

  constructor(private ngZone: NgZone) { }

  async ngOnInit()  {
    await BarcodeScanner.checkPermission({ force: true });
    BarcodeScanner.prepare();
  }

  async scan() {
    document.body.style.opacity = '0'; // make WebView transparent
    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result
    document.body.style.opacity = '1';
    if (result.hasContent) {
      this.data = result.content; // log the raw scanned content
    }
  }
}
