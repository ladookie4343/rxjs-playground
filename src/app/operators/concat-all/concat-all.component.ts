import { Component } from '@angular/core';
import { concatAll, fromEvent, interval, map, take, tap } from 'rxjs';

@Component({
  selector: 'app-concat-all',
  templateUrl: './concat-all.component.html',
})
export class ConcatAllComponent {
  docClicks$ = fromEvent(document, 'click').pipe(
    map((event: Event) => event as MouseEvent),
    map((mouseEvent: MouseEvent) => mouseEvent.clientX)
  );

  higherOrder$ = this.docClicks$.pipe(
    map(() => interval(1000).pipe(take(4))),
  );
  
  result$ = this.higherOrder$.pipe(concatAll())
}
