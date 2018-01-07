import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent {
  public href: string = "";

    constructor(
      private router: Router,
      private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.href = this.activatedRoute.snapshot.url[1].path;
    }
}