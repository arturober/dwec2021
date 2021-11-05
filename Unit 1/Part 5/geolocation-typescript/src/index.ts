import "../styles.css";
import "../node_modules/mapbox-gl/dist/mapbox-gl.css";
import "../node_modules/@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import * as mapboxgl from "mapbox-gl";
import * as MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { MyGeolocation } from "./my-geolocation.class";

(mapboxgl.accessToken as any) =
  "pk.eyJ1IjoiYXJ0dXJvYmVyIiwiYSI6ImNrMXFlc29vazExaDUzbms2cWdpb3l6cGwifQ.hyoOv4iVc6XqWPYBKa4NkQ";

async function geolocate(): Promise<void> {
  const coords = await MyGeolocation.getPosition();

  const map = new mapboxgl.Map({
    container: document.getElementById("map"),
    style: "mapbox://styles/mapbox/streets-v11",
    center: [coords.longitude, coords.latitude],
    zoom: 14,
  });

  const marker = new mapboxgl.Marker({ color: "red" })
    .setLngLat([coords.longitude, coords.latitude])
    .addTo(map);

  map.on("click", (e) => {
    map.panTo(e.lngLat); // Center the map in the position
    marker.setLngLat(e.lngLat);
    // new mapboxgl.Popup()
    //   .setLngLat(e.lngLat)
    //   .setHTML(`Latitude: ${e.lngLat.lat}<br>Longitude: ${e.lngLat.lng}`)
    //   .addTo(map);
  });

  const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    marker: false
  });
  map.addControl(geocoder);

  geocoder.on("result", e => {
    console.log(e);
    marker.setLngLat(e.result.center);
  });
    
}

geolocate();
