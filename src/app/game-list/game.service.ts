import { Injectable } from '@angular/core';

import { Game } from '../game/game';
import { GAMES } from './games-json'; //importamos el listado de juegos
@Injectable()
export class GameService {
  getGamesList(): Game[] {
    //regresamos el listado de perritos
    //aqui podriamos agregar un peticion al servidor
  	return GAMES;
  }
  
}