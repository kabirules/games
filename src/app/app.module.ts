import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule }    from './app-routing.module';

import { MyHeaderComponent } from './my-header/my-header.component';
import { SeparatorComponent } from './separator/separator.component';
import { GameListComponent } from './game-list/game-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    SeparatorComponent,
    GameListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
