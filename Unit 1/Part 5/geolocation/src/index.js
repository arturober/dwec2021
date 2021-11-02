import "../styles.css";
import "../node_modules/mapbox-gl/dist/mapbox-gl.css";
import "../node_modules/@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { MyGeolocation } from "./my-geolocation.class";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYXJ0dXJvYmVyIiwiYSI6ImNrMXFlc29vazExaDUzbms2cWdpb3l6cGwifQ.hyoOv4iVc6XqWPYBKa4NkQ";

async function geolocate() {
  let coords = await MyGeolocation.getPosition();

  let map = new mapboxgl.Map({
    container: document.getElementById("map"),
    style: "mapbox://styles/mapbox/streets-v11",
    center: [coords.longitude, coords.latitude],
    zoom: 14,
  });

  let marker = new mapboxgl.Marker({ color: "red" })
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

  let geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl,
    marker: false
  });
  map.addControl(geocoder);

  geocoder.on("result", e => {
    console.log(e);
    marker.setLngLat(e.result.center);
  });
    
}

geolocate();
