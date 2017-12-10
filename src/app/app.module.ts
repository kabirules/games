import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MyHeaderComponent } from './my-header/my-header.component';
import { SeparatorComponent } from './separator/separator.component';
import { DogListComponent } from './dog-list/dog-list.component';
import { GameListComponent } from './game-list/game-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    SeparatorComponent,
    GameListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
