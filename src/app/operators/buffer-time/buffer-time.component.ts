import { Component } from '@angular/core';
import { bufferTime, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-buffer-time',
  templateUrl: './buffer-time.component.html',
})
export class BufferTimeComponent {
  clicks$ = fromEvent(document, 'click').pipe(
    map((event: Event) => event as MouseEvent),
    map((mouseEvent: MouseEvent) => mouseEvent.clientX)
  );

  result$ = this.clicks$.pipe(bufferTime(3000));
}
