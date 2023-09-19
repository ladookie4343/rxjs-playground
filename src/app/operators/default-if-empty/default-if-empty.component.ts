import { Component } from '@angular/core';
import { fromEvent, takeUntil, interval, defaultIfEmpty, map } from 'rxjs';

@Component({
  selector: 'app-default-if-empty',
  templateUrl: './default-if-empty.component.html',
})
export class DefaultIfEmptyComponent {
  docClicks$ = fromEvent(document, 'click').pipe(
    map((event: Event) => event as MouseEvent),
    map((mouseEvent: MouseEvent) => mouseEvent.clientX)
  );

  clicksBeforeFive$ = this.docClicks$.pipe(
    takeUntil(interval(5000))
  );

  result$ = this.clicksBeforeFive$.pipe(
    defaultIfEmpty('no clicks')
  );
}
