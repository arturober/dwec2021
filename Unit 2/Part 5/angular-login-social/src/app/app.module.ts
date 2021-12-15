import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GoogleLoginModule } from './google-login/google-login.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    GoogleLoginModule.forRoot(
      '746820501392-nc4pet9ffnm8gq8hg005re9e6ho65nua.apps.googleusercontent.com'
    ),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
