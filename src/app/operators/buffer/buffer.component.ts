import { Component } from '@angular/core';
import { Subject, buffer, debounceTime, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.html',
})
export class BufferComponent {
  buttonClick$ = new Subject();

  docClicks$ = fromEvent(document, 'click').pipe(
    map((event: Event) => event as MouseEvent),
    map((mouseEvent: MouseEvent) => mouseEvent.clientX)
  );
  
  result$ = this.docClicks$.pipe(
    buffer(this.buttonClick$)
  );

  intermediateResult$ = this.docClicks$.pipe(debounceTime(500));

  result2$ = this.docClicks$.pipe(
    buffer(this.docClicks$.pipe(debounceTime(500)))
  );
  
  onClick() {
    this.buttonClick$.next(null);
  }
}
