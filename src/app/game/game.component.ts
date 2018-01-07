import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GameService } from '../game-list/game.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [GameService]
})

export class GameComponent {
  games = [];

  public href: string = "";
  public fullUrl: string = "";

    constructor(
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private gameService: GameService,
      public sanitizer: DomSanitizer) {
    }

    getGames(): void {
      //la funcion obtiene los juegos del servicio
      this.games = this.gameService.getGamesList();
    }    

    ngOnInit() {
      this.href = this.activatedRoute.snapshot.url[1].path;
      this.getGames();
      for (let entry of this.games) {
        if (entry.id == this.href) {
          this.fullUrl = entry.url;
          break;
        }
      }
    }
}