import { Component, OnInit } from '@angular/core';
import{Hero} from './hero';
import {HeroService} from './hero.service';


/*
    Component Decorator: 
      requires a selector and template/templateUrl
*/

@Component({
  selector: 'app-root', //element that attached to || inject templateURL
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent implements OnInit{
  title = 'Clement app';
  // hero: Hero ={
  //  id: 1,
  //  name: 'Windstrom'
  // }
  selectedHero: Hero;
 // heroes = HEROES;
  heroes: Hero[];
  onSelect(hero: Hero): void {   //??????????
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService) { }
  
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}




