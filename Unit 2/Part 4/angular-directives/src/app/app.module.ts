import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SetBgcolorDirective } from './directives/set-bgcolor.directive';
import { RepeatTimesDirective } from './directives/repeat-times.directive';
import { ForFilterDirective } from './directives/for-filter.directive';
import { ForGroupDirective } from './directives/for-group.directive';

@NgModule({
  declarations: [
    AppComponent,
    SetBgcolorDirective,
    RepeatTimesDirective,
    ForFilterDirective,
    ForGroupDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
