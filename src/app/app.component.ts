import { animate, animateChild, group, keyframes, query, stagger, state, style, transition, trigger } from '@angular/animations';
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
    ]),
   
    trigger('segundaAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('300ms', [
          animate('.5s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateX(-50%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateX(-10px) scale(1.1)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
          ]))]), { optional: true }),
        query(':leave', stagger('300ms', [
          animate('1s ease-out', keyframes([
            style({ opacity: 1, transform: 'scale(1.1)', offset: 0 }),
            style({ opacity: .5, transform: 'scale(.5)', offset: 0.3 }),
            style({ opacity: 0, transform: 'scale(0)', offset: 1 }),
          ]))]), { optional: true })
      ]),
    ]),
      
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
