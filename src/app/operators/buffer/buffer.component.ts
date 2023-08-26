import { Component } from '@angular/core';
import { Subject, buffer, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.html',
})
export class BufferComponent {
  buttonClicks$ = new Subject();

  docClicks$ = fromEvent(document, 'click').pipe(
    map((event: Event) => event as MouseEvent),
    map((mouseEvent: MouseEvent) => mouseEvent.clientX)
  );
  
  result$ = this.docClicks$.pipe(
    buffer(this.buttonClicks$)
  );
  
  onClick() {
    this.buttonClicks$.next(null);
  }
}
