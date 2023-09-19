import { Component } from '@angular/core';
import { concatMap, concatWith, fromEvent, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-concat-with',
  templateUrl: './concat-with.component.html'
})
export class ConcatWithComponent {
  docClicks$ = fromEvent(document, 'click').pipe(
    map((event: Event) => event as MouseEvent),
    map((mouseEvent: MouseEvent) => mouseEvent.clientX)
  );

  mouseMoves$ = fromEvent(document, 'mousemove');
  
  result$ = this.docClicks$.pipe(
    map(() => 'click'),
    take(3),
    concatWith(
      this.mouseMoves$.pipe(
        map(() => 'move')
      )
    )
  );
}
