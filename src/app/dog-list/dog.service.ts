import { Injectable } from '@angular/core';

import { Dog } from './dog';
import { DOGS } from './dogs-json'; //importamos el listado de perritos
@Injectable()
export class DogService {
  getDogsList(): Dog[] {
    //regresamos el listado de perritos
    //aqui podriamos agregar un peticion al servidor
  	return DOGS;
  }
  
}