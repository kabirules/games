import { Component } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
   providers: [GameService]
})

export class GameListComponent {
  games = [];

  //creamos el constructor, donde incializamos el servicio
   constructor(private gameService: GameService) { }

   getGames(): void {
    //la funcion obtiene los juegos del servicio
    this.games = this.gameService.getGamesList();
  }
  //esta función es llamada solo una vez 
  //la utilizaremos para inicializar los juegos
  ngOnInit(): void {
    this.getGames(); 
  }

}