import { Component } from '@angular/core';
import { Subject, catchError, fromEvent, map, of } from 'rxjs';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
})
export class CatchErrorComponent {
  docClicks$ = fromEvent(document, 'click').pipe(
    map((event: Event) => event as MouseEvent),
    map((mouseEvent: MouseEvent) => mouseEvent.clientX)
  );
  
  result$ = this.docClicks$.pipe(
    map(value => {
      if (value > 100 && value < 300) {
        throw 'Error!';
      }
      return value;
    }),
    catchError(_ => of('Bad Click'))
  );

}
