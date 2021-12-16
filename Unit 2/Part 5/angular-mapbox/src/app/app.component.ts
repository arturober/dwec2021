import { Component } from '@angular/core';
import { Result } from 'ngx-mapbox-gl-geocoder-control';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  lat = 38.4039418;
  lng = -0.5288701;
  zoom = 17;

  changePosition(result: Result) {
    this.lat = result.geometry.coordinates[1];
    this.lng = result.geometry.coordinates[0];
    console.log('New address: ' + result.place_name);
  }

}
