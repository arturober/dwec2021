export class MyGeolocation {
  static getPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position.coords),
        (error) => {
          switch (error.code) {
          case error.PERMISSION_DENIED: // User didn't allow the web page to retrieve location
            reject("User denied the request for Geolocation.");
            break;
          case error.POSITION_UNAVAILABLE: // Couldn't get the location
            reject("Location information is unavailable.");
            break;
          case error.TIMEOUT: // The maximum amount of time to get location information has passed
            reject("The request to get user location timed out.");
            break;
          case error.UNKNOWN_ERROR:
            reject("An unknown error occurred.");
            break;
          }
        }
      );
    });
    
  }
}
