import { Component, NgZone } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  googleUser!: gapi.auth2.GoogleUser;

  constructor(
    library: FaIconLibrary,
    private ngZone: NgZone
  ) {
    library.addIcons(faGoogle);
    library.addIcons(faFacebook);
  }

  loggedGoogle(user: gapi.auth2.GoogleUser) {
    // Send this token to your server for register / login
    this.ngZone.run(() => this.googleUser = user);
  }

}
