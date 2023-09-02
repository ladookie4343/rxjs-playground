import { Component } from '@angular/core';
import { concatMap, fromEvent, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
})
export class ConcatMapComponent {
  docClicks$ = fromEvent(document, 'click').pipe(
    map((event: Event) => event as MouseEvent),
    map((mouseEvent: MouseEvent) => mouseEvent.clientX)
  );
  
  result$ = this.docClicks$.pipe(
    concatMap(() => interval(1000).pipe(take(4)))
  );
}
