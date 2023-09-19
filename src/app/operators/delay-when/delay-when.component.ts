import { Component } from '@angular/core';
import { fromEvent, delayWhen, interval, map } from 'rxjs';

@Component({
  selector: 'app-delay-when',
  templateUrl: './delay-when.component.html'
})
export class DelayWhenComponent {
  docClicks$ = fromEvent(document, 'click').pipe(
    map((event: Event) => event as MouseEvent),
    map((mouseEvent: MouseEvent) => mouseEvent.clientX)
  );

  result$ = this.docClicks$.pipe(
    delayWhen(() => interval(Math.random() * 10000))
  );
}
