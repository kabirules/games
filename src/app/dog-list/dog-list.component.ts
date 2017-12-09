import { Component } from '@angular/core';
import { DogService } from './dog.service';

@Component({
  selector: 'dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css'],
   providers: [DogService]
})

export class DogListComponent {
  dogs = [];

  //creamos el constructor, donde incializamos el servicio
   constructor(private dogService: DogService) { }

   getDogs(): void {
    //la funcion obtiene los perritos del servicio
    this.dogs = this.dogService.getDogsList();
  }
  //esta función es llamada solo una vez 
  //la utilizaremos para inicializar los perritos
  ngOnInit(): void {
    this.getDogs(); 
  }

}