import { Component } from '@angular/core';

@Component({
  selector: 'separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.css']
})

// Component class
export class SeparatorComponent {
  //todas estas variables podemos usarlas en nuestro template.
	title: string = '¡Adopta a un perrito!';
	icon: string = 'fa fa-4x fa-heart';
	description: string = 'Aquí podrás encontrar algunos perritos esperando un hogar. '+
	'No esperes más y conoce a tu próximo mejor amigo';
}