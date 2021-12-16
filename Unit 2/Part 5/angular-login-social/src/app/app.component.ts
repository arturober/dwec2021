import { Component, NgZone } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { LoadFbApiService } from './facebook-login/services/load-fb-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  googleUser!: gapi.auth2.GoogleUser;
  fbToken = '';

  constructor(
    library: FaIconLibrary,
    private ngZone: NgZone,
    private readonly fbApiService: LoadFbApiService
  ) {
    library.addIcons(faGoogle);
    library.addIcons(faFacebook);
  }

  loggedGoogle(user: gapi.auth2.GoogleUser) {
    // Send this token to your server for register / login
    this.ngZone.run(() => this.googleUser = user);
  }

  loggedFacebook(resp: fb.StatusResponse) {
    // Send this to your server
    this.fbToken = resp.authResponse.accessToken;
  }

  showError(error: any) {
    console.error(error);
  }

  logoutFB() {
    this.fbApiService.logout().subscribe({
      complete: () => this.fbToken = ''
    });
  }
}
