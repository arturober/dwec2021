import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MapComponent } from 'ngx-mapbox-gl';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit, AfterViewInit {
  @ViewChild(MapComponent) mapComp: MapComponent;
  lat = 0;
  lng = 0;

  async ngOnInit() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.lat = coordinates.coords.latitude;
    this.lng = coordinates.coords.longitude;
  }

  ngAfterViewInit() {
    this.mapComp.mapLoad.subscribe(
      () => {
        this.mapComp.mapInstance.resize(); // Necessary for 100% height
      }
    );
  }
}
