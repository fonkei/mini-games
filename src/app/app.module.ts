import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestBuzzerComponent } from './test-buzzer/test-buzzer.component';
import { KeyboardManager } from './KeyboardManager';

@NgModule({
  declarations: [
    AppComponent,
    TestBuzzerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [KeyboardManager],
  bootstrap: [AppComponent]
})
export class AppModule {
}
