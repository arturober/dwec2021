import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MapComponent } from 'ngx-mapbox-gl';
import { Result } from 'ngx-mapbox-gl-geocoder-control';
import { Geolocation } from '@capacitor/geolocation';
import { StartNavigation } from '@proteansoftware/capacitor-start-navigation';

@Component({
  selector: 'app-driving-directions',
  templateUrl: './driving-directions.page.html',
  styleUrls: ['./driving-directions.page.scss'],
})
export class DrivingDirectionsPage implements OnInit, AfterViewInit {
  @ViewChild(MapComponent) mapComp: MapComponent;
  lat = 0;
  lng = 0;

  constructor() { }

  async ngOnInit() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.lat = coordinates.coords.latitude;
    this.lng = coordinates.coords.longitude;
  }

  ngAfterViewInit() {
    this.mapComp.mapLoad.subscribe(
      () => {
        this.mapComp.mapInstance.resize(); // Necessary for full height
      }
    );
  }

  changePosition(result: Result) {
    this.lat = result.geometry.coordinates[1];
    this.lng = result.geometry.coordinates[0];
  }

  startNavigation() {
    StartNavigation.launchMapsApp({
      latitude: this.lat,
      longitude: this.lng,
      name: 'Directions example',
    });
  }
}
