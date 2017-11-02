import { Component, Input } from '@angular/core';
import { Hero } from './hero';



/*
    The component class name should be written in upper camel case and end in the word "Component".
    The component file name should be spelled in lower dash case, each word separated by dashes, 
    and end in .component.ts. 
*/


@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})

//Always export the component class because you'll always import it elsewhere
//like public in java
export class HeroDetailComponent {
    @Input() hero: Hero;
}