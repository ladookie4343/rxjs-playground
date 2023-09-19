import { Component } from '@angular/core';
import { Subject, count, fromEvent, map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
})
export class CountComponent {
  buttonClicks$ = new Subject();

  docClicks$ = fromEvent(document, 'click').pipe(
    map((event: Event) => event as MouseEvent),
    map((mouseEvent: MouseEvent) => mouseEvent.clientX)
  );
  
  result$ = this.docClicks$.pipe(
    takeUntil(this.buttonClicks$),
    count()
  );
  
  onClick() {
    this.buttonClicks$.next(null);
  }
}
