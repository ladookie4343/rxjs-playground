import { Component } from '@angular/core';
import { fromEvent, scan, debounce, interval, map } from 'rxjs';


@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
})
export class DebounceComponent {
  docClicks$ = fromEvent(document, 'click').pipe(
    map((event: Event) => event as MouseEvent),
    map((mouseEvent: MouseEvent) => mouseEvent.clientX)
  );
  result$ = this.docClicks$.pipe(
    scan(i => ++i, 1),
    debounce(i => interval(50 * i))
  );
}
