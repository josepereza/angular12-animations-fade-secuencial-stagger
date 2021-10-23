import { animate, animateChild, group, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, VERSION,OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HEROES} from './data'
var tiempo=300
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations:[
    trigger('todosAnimation', [
      transition(':enter', [
        group([
          query('h1', [
            style({ transform: 'translateY(-20px)',opacity:0 }),
            animate(1000)
          ]),
          query('li', [
            stagger(500, [
              animateChild()
            ])
          ])
        ])
      ])
    ]),

    trigger('entrada',[
      state('void',style({
        transform:'translateX(-100%)',opacity:0
      })),
      transition(':enter',[
       animate('1s ease-out',style({
         transform:'translateX(0)',opacity:1
       }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit  {
  misheroes=of(HEROES)
  heroes:any[]=[]
  name = 'Angular ' + VERSION.major;
  ngOnInit(){
this.heroes=HEROES;
console.log(tiempo)

  }
}
