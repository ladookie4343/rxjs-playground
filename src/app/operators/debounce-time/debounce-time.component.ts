import { Component } from '@angular/core';
import { fromEvent, map, debounceTime } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
})
export class DebounceTimeComponent {
  docClicks$ = fromEvent(document, 'click').pipe(
    map((event: Event) => event as MouseEvent),
    map((mouseEvent: MouseEvent) => mouseEvent.clientX)
  );

  result$ = this.docClicks$.pipe(
    debounceTime(1000)
  );
}
