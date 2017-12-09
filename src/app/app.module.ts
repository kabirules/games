import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { GameComponent } from './game/game.component';
import { SeparatorComponent } from './separator/separator.component';
import { DogListComponent } from './dog-list/dog-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    SeparatorComponent,
    DogListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
