import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestBuzzerComponent } from './test-buzzer/test-buzzer.component';
import { KeyboardManager } from './KeyboardManager';

import { routing } from './app.routing';
import { ShapeCounterComponent } from './shape-counter/shape-counter.component';
import { GameService } from "./game.service";
import { ReactionComponent } from './reaction/reaction.component';

@NgModule({
  declarations: [
    AppComponent,
    TestBuzzerComponent,
    ShapeCounterComponent,
    ReactionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [KeyboardManager, GameService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
