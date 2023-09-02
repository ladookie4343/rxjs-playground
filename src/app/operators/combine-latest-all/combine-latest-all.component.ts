import { Component } from '@angular/core';
import { combineLatestAll, fromEvent, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-combine-latest-all',
  templateUrl: './combine-latest-all.component.html',
})
export class CombineLatestAllComponent {
  docClicks$ = fromEvent(document, 'click').pipe(
    map((event: Event) => event as MouseEvent),
    map((mouseEvent: MouseEvent) => mouseEvent.clientX)
  );

  higherOrder$ = this.docClicks$.pipe(
    map(() => interval(Math.random() * 2000).pipe(take(10))),
    take(3)
  );

  result$ = this.higherOrder$.pipe(combineLatestAll());
}
