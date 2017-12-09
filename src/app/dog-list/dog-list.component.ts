import { Component } from '@angular/core';

@Component({
  selector: 'dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css'],
   providers: []
})

// Component class
export class DogListComponent {
  dogs = [
  {
  	name:'Sisqo', 
  	age:'11 años', 
    description:'Sisqo es un perro muy amoroso, ya esta viejito y no escucha muy bien. Le encanta cazar ratas.', 
    picture:'../../assets/images/dogs-pictures/0.jpg'
  },{
  	name:'Cerbero', 
  	age:'1 año', 
  	description:'Cerbero es un perro con mucha energia, necesita un hogar donde tenga mucho espacio', 
  	picture:'../../assets/images/dogs-pictures/1.jpg'
  }
 ];
}