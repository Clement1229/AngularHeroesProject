import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

/*
    Component Decorator: 
      requires a selector and template/templateUrl
*/

@Component({
  selector: 'app-root', //element that attached to || inject templateURL
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clement app';
  hero: Hero ={
   id: 1,
   name: 'Windstrom'
  }
}