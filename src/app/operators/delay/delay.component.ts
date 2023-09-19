import { Component } from '@angular/core';
import { fromEvent, delay, map } from 'rxjs';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
})
export class DelayComponent {
  docClicks$ = fromEvent(document, 'click').pipe(
    map((event: Event) => event as MouseEvent),
    map((mouseEvent: MouseEvent) => mouseEvent.clientX)
  );

  result$ = this.docClicks$.pipe(delay(10000));

  result2$ = this.docClicks$.pipe(delay(new Date('September 19, 2023 17:57')))
}
