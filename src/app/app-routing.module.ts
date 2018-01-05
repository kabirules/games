import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameComponent }   from './game/game.component';
import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';

const routes: Routes = [
    {path: '', component: GameListComponent},
    {path: 'games', component: GameComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}