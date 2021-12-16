import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GoogleLoginModule } from './google-login/google-login.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FacebookLoginModule } from './facebook-login/facebook-login.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    GoogleLoginModule.forRoot(
      '746820501392-nc4pet9ffnm8gq8hg005re9e6ho65nua.apps.googleusercontent.com'
    ),
    FacebookLoginModule.forRoot({app_id: '909867656314801', version: 'v12.0'}),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
