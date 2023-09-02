import { Component } from '@angular/core';
import { EMPTY, Subject, bufferToggle, fromEvent, map, of } from 'rxjs';

@Component({
  selector: 'app-buffer-toggle',
  templateUrl: './buffer-toggle.component.html',
})
export class BufferToggleComponent {
  clicks$ = fromEvent(document, 'click').pipe(
    map((event: Event) => event as MouseEvent),
    map((mouseEvent: MouseEvent) => mouseEvent.clientX)
  );

  buttonClicks$ = new Subject();
  
  result$ = this.clicks$.pipe(
    bufferToggle(this.clicks$, 
      x => x > 500 ? of(null) : EMPTY
    )
  );
}
